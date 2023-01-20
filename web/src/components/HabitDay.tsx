import * as RadixCheckBox from '@radix-ui/react-checkbox';
import * as Popover from "@radix-ui/react-popover"
import clsx from 'clsx'
import { Check } from 'phosphor-react';
import { ProgressBar } from "./ProgressBar"

interface HabitDayProps {
  disabled?: boolean
  completed?: number
  amount?: number
}

interface CheckBoxProps {
  text: string
}

function CheckBox({ text }: CheckBoxProps) {
  return (
    <RadixCheckBox.Root
      className='flex items-center gap-3 group'
    >
      <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 botder-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
        <RadixCheckBox.Indicator>
          <Check size={20} className='text-white' />
        </RadixCheckBox.Indicator>
      </div>

      <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
        { text }
      </span>
    </RadixCheckBox.Root>
  )
}

export function HabitDay({ disabled = false, completed = 0, amount = 1 }: HabitDayProps) {
  const commonClass = 'w-10 h10 bg-zinc-900 border-2 border-zinc-800 rounded-lg'

  if (disabled) {
    return <div className={`${commonClass} opacity-40 cursor-not-allowed`}></div>
  }

  const completedPercentage = Math.round((completed / amount) * 100)

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(commonClass, {
          'bg-zinc-900 border-zinc-800': completedPercentage === 0,
          'bg-violet-900 border-violet-700': completedPercentage > 0 && completedPercentage < 20,
          'bg-violet-800 border-violet-600': completedPercentage >= 20 && completedPercentage < 40,
          'bg-violet-700 border-violet-500': completedPercentage >= 40 && completedPercentage < 60,
          'bg-violet-600 border-violet-500': completedPercentage >= 60 && completedPercentage < 80,
          'bg-violet-500 border-violet-400': completedPercentage >= 80
        })}
      />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">17/01</span>

          <ProgressBar progress={completedPercentage} />

          <div className="mt-6 flex flex-col gap-3">
            <CheckBox text="Beber 2L de Água" />
          </div>
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
