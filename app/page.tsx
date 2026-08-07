"use client"

import { useState } from "react"
import { SiteHeader } from "./components/site-header"
import { Hero } from "./components/hero"
import { HowItHelps } from "./components/how-it-helps"
import { DonationForm } from "./components/donation-form"
import { MyStory } from "./components/my-story"

export default function Page() {
  const [raised, setRaised] = useState(150)
  const goal = 300

  function handleDonate(amount: number) {
    setRaised((current) => current + amount)
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero raised={raised} goal={goal} />
        <MyStory />
        <HowItHelps />
      </main>
    </div>
  )
}
