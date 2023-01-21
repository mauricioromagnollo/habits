import { useRoute } from "@react-navigation/native";
import { ScrollView, View, Text, Alert } from "react-native";
import { useState, useEffect } from "react";
import dayjs from 'dayjs'

import { BackButton, Checkbox, Loading, ProgressBar, HabitsEmpty } from "../components";
import { api } from "../lib/axios";
import { generateProgressPercentage } from '../utils'
import clsx from "clsx";

interface HabitParams {
  date: string
}

type Habit = {
  id: string
  title: string
}

type DayInfo = {
  completedHabits: string[]
  possibleHabits: Array<Habit>
}

export function Habit() {
  const [loading, setLoading] = useState(true)
  const [dayInfo, setDayInfo] = useState<DayInfo | null>(null)
  const [completedHabits, setCompletedHabits] = useState<Array<string>>([])

  const route = useRoute()
  const { date } = route.params as HabitParams

  const parsedDate = dayjs(date)
  const isDateInPast = parsedDate.endOf('day').isBefore(new Date())
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')

  const habitsProgress = dayInfo?.possibleHabits.length
    ? generateProgressPercentage(dayInfo.possibleHabits.length, completedHabits.length)
    : 0

  async function fetchHabits() {
    try {
      setLoading(true)
      const response = await api.get('/days', { params: { date }})
      setDayInfo(response.data)
      setCompletedHabits(response.data.completedHabits)
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível carregar as informações dos hábitos')
    } finally {
      setLoading(false)
    }
  }

  async function handleToggleHabit(habitId: string) {
    try {
      await api.patch(`/habits/${habitId}/toggle`)
      if (completedHabits.includes(habitId)) {
        setCompletedHabits(prevState => prevState.filter(habit => habit !== habitId))
      } else {
        setCompletedHabits(prevState => [...prevState, habitId])
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível atualizar o status do hábito.')
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  if(loading) {
    return (
      <Loading />
    )
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={habitsProgress} />

        <View className={clsx("mt-6", {
          ['opacity-50']: isDateInPast
        })}>
          {
            dayInfo?.possibleHabits ?
            dayInfo.possibleHabits.map(possibleHabit => (
              <Checkbox
                key={possibleHabit.id}
                title={possibleHabit.title}
                checked={completedHabits.includes(possibleHabit.id)}
                disabled={isDateInPast}
                onPress={() => handleToggleHabit(possibleHabit.id)}
              />
            ))
            : <HabitsEmpty />
          }
        </View>

        {
          isDateInPast && (
            <Text className="text-white mt-10 text-center">
              Você não pode editar hábitos de uma data passada
            </Text>
          )
        }
      </ScrollView>
    </View>
  )
}
