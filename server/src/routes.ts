import dayjs from "dayjs"
import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "./lib/prisma"

export async function routes(app: FastifyInstance) {
  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(
        z.number().min(0).max(6)
      ),
    })

    const { title, weekDays } = createHabitBody.parse(request.body)

    const today = dayjs().startOf('day').toDate()

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekDay) => {
            return {
              week_day: weekDay,
            }
          }),
        }
      }
    })
  })

  app.patch('/habits/:id/toggle', async (request) => {
    const toggleHabitsParams = z.object({
      id: z.string().uuid()
    })

    const { id } = toggleHabitsParams.parse(request.params)

    const today = dayjs().startOf('day').toDate()

    let day = await prisma.day.findUnique({
      where: {
        date: today
      }
    })

    if (!day) {
      day = await prisma.day.create({
        data: {
          date: today
        }
      })
    }

    const dayHabit = await prisma.dayHabit.findUnique({
      where: {
        day_id_habit_id: {
          day_id: day.id,
          habit_id: id
        }
      }
    })

    if (dayHabit) {
      await prisma.dayHabit.delete({
        where: {
          id: dayHabit.id
        }
      })
    } else {
      await prisma.dayHabit.create({
        data: {
          day_id: day.id,
          habit_id: id
        }
      })
    }

  })

  app.get('/days', async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date(),
    })

    const { date } = getDayParams.parse(request.query)

    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get('day')

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay,
          }
        }
      },
    })

    const day = await prisma.day.findFirst({
      where: {
        date: parsedDate.toDate(),
      },
      include: {
        habits: true,
      }
    })

    const completedHabits = day?.habits.map(dayHabit => {
      return dayHabit.habit_id
    }) ?? []

    return {
      possibleHabits,
      completedHabits,
    }
  })

  app.get('/summary', async () => {
    const summary = await prisma.$queryRaw`
      SELECT
        D.id,
        D.date,
        (
          SELECT
            CAST(COUNT(*) as FLOAT)
          FROM DAY_HABITS DH
          WHERE DH.day_id = D.id
        ) as completed,
        (
          SELECT
            CAST(COUNT(*) as FLOAT)
          FROM HABIT_WEEK_DAYS HWD
          JOIN HABITS H
            ON H.id = HWD.habit_id
          WHERE
            HWD.week_day = CAST(STRFTIME('%w', D.date/1000.0, 'unixepoch') as INT)
            AND H.created_at <= D.date
        ) as amount
      FROM DAYS D
    `

    return summary
  })
}
