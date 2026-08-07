"use client"

import { ProgressSection } from "./progress-section"

interface DonationTrackerProps {
  raised: number
  goal: number
}

export function DonationTracker({ raised, goal }: DonationTrackerProps) {
  
  return (
    <div className="space-y-10">
      <ProgressSection raised={raised} goal={goal} />
    </div>
  )
}
