import * as RadixCheckBox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../libs/axios';
import { DateTimeUtil } from '../utils';

interface HabitsListCheckBoxProps {
  date: Date
  onCompletedChanged: (completed: number) => void
}

type PossibleHabit = {
  id: string
  title: string
  created_at: string
}

type CompletedHabit = string

interface HabitsInfo {
  possibleHabits: Array<PossibleHabit>
  completedHabits: Array<CompletedHabit>
}

export function HabitsListCheckBox({ date, onCompletedChanged }: HabitsListCheckBoxProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()

  useEffect(() => {
    api.get('/days', {
      params: {
        date: date.toISOString(),
      }
    }).then(response => {
      setHabitsInfo(response.data)
    })
  }, [])

  async function handleToggleHabit(habitId: string) {
    await api.patch(`/habits/${habitId}/toggle`)
    const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId)

    let completedHabits: string[] = []

    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId]
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    })

    onCompletedChanged(completedHabits.length)
  }

  const isDateInPast = DateTimeUtil.isDateInThePast(date)

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map(possibleHabit => {
        return (
          <RadixCheckBox.Root
          className='flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed'
          key={possibleHabit.id}
          onCheckedChange={() => handleToggleHabit(possibleHabit.id)}
          checked={habitsInfo.completedHabits.includes(possibleHabit.id)}
          disabled={isDateInPast}
        >
          <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 botder-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background'>
            <RadixCheckBox.Indicator>
              <Check size={20} className='text-white' />
            </RadixCheckBox.Indicator>
          </div>

          <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
            { possibleHabit.title }
          </span>
        </RadixCheckBox.Root>
        )
      })}
    </div>
  )
}
