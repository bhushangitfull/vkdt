"use client"

import { useEffect, useState, useRef } from "react"

const formatMoney = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

export function ProgressSection({ raised, goal }: { raised: number; goal: number }) {
  const percent = Math.round((raised / goal) * 100)
  const fillPercent = Math.min(percent, 100)
  const displayHeight = raised > 0 ? Math.max(fillPercent, 8) : 0
  const reachedGoal = raised >= goal
  const [animHeight, setAnimHeight] = useState(0)
  const hasIntroPlayed = useRef(false)

  useEffect(() => {
    if (!hasIntroPlayed.current) {
      hasIntroPlayed.current = true
      const riseUp = setTimeout(() => setAnimHeight(250), 150)
      const dipDown = setTimeout(() => setAnimHeight(15), 900)
      const settle = setTimeout(() => setAnimHeight(displayHeight), 1500)
      return () => {
        clearTimeout(riseUp)
        clearTimeout(dipDown)
        clearTimeout(settle)
      }
    } else {
      // Every later change (a real donation coming in) animates normally
      requestAnimationFrame(() => setAnimHeight(displayHeight))
    }
  }, [displayHeight])

  const milestoneValues = [300, 200, 100]

  return (
    <section id="thermometer" className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-3xl border-[3px] border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--foreground)] sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {formatMoney(raised)} raised
            </h2>
            <p className="mt-2 text-lg font-medium text-foreground/70">
              of {formatMoney(goal)} goal
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid h-[420px] w-full max-w-[260px] grid-cols-[auto_auto] items-center gap-6 md:max-w-none">
              <div className="relative flex h-full w-[84px] items-end justify-center">
                <div className={`thermometer ${reachedGoal ? "thermometer-broken" : ""}`}>
                  <div className="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-full bg-white/80">
                    <div
                      className="mercury absolute inset-x-3 bottom-0 rounded-full shadow-[0_0_32px_rgba(239,68,68,0.35)]"
                      style={{ height: `${animHeight}%` }}
                    />
                  </div>
                </div>
                <div className="thermometer-bulb mt-2" />
              </div>
              <div className="relative h-full md:w-[120px]">
                {milestoneValues.map((value) => (
                  <div
                    key={value}
                    className="absolute right-0 flex items-center gap-2 text-xs font-semibold text-foreground"
                    style={{
                      top: `calc(${(1 - value / goal) * 100}% - 12px)`,
                    }}
                  >
                    <span className="h-px w-8 bg-foreground/20" />
                    <span className="rounded-full border border-foreground/20 bg-background/90 px-2 py-1">
                      {formatMoney(value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center font-hand text-xl text-foreground">
          {reachedGoal ? "Thermometer overfill! Time to celebrate — it cracked when the goal was reached." : `${percent}% funded`}
        </div>
      </div>
    </section>
  )
}

