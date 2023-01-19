interface HabitDayProps {
  filled?: boolean
}

export function HabitDay({ filled = true }: HabitDayProps) {
  if (!filled) {
    return <div className="w-10 h10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
  }

  return <div className="w-10 h10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
}
