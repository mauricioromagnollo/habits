import * as Popover from "@radix-ui/react-popover"
import clsx from 'clsx'
import { useState } from "react";
import { DateTimeUtil } from "../utils";
import { HabitsListCheckBox } from "./HabitsListCheckBox";

import { ProgressBar } from "./ProgressBar"

interface HabitDayProps {
  disabled?: boolean
  defaultCompleted?: number
  amount?: number
  date: Date
}

function getBgAndBorderColorClassByPercentage(percentage: number) {
  return {
    'bg-zinc-900 border-zinc-800': percentage === 0,
    'bg-violet-900 border-violet-700': percentage > 0 && percentage < 20,
    'bg-violet-800 border-violet-600': percentage >= 20 && percentage < 40,
    'bg-violet-700 border-violet-500': percentage >= 40 && percentage < 60,
    'bg-violet-600 border-violet-500': percentage >= 60 && percentage < 80,
    'bg-violet-500 border-violet-400': percentage >= 80
  }
}

export function HabitDay({ disabled = false, defaultCompleted = 0, amount = 0, date = new Date() }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted)

  const commonClass = 'w-10 h10 bg-zinc-900 border-2 border-zinc-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'

  if (disabled) {
    return <div className={`${commonClass} opacity-40 cursor-not-allowed`}></div>
  }

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0
  const dayAndMonth = DateTimeUtil.getFormattedDayAndMonth(date)
  const dayOfWeek = DateTimeUtil.getTheDayOfWeek(date)

  function handleCompletedChange(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(commonClass, getBgAndBorderColorClassByPercentage(completedPercentage))}
      />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>
          <ProgressBar progress={completedPercentage} />
          <HabitsListCheckBox date={date} onCompletedChanged={handleCompletedChange} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
