"use client"

import { useEffect, useState } from "react"
import { SiteHeader } from "./components/site-header"
import { Hero } from "./components/hero"
import { HowItHelps } from "./components/how-it-helps"
import { MyStory } from "./components/my-story"

export default function Page() {
  const [raised, setRaised] = useState(288)
  const goal = 300

  useEffect(() => {
    let isMounted = true

    async function loadRaised() {
      try {
        const response = await fetch("/api/donations/total")
        if (!response.ok) {
          throw new Error("Failed to fetch donation total")
        }

        const data = await response.json()
        if (isMounted) {
          setRaised(Number(data.total ?? 0))
        }
      } catch (error) {
        console.error("Unable to load donation total", error)
      }
    }

    loadRaised()
    const intervalId = window.setInterval(loadRaised, 10000)

    return () => {
      isMounted = false
      window.clearInterval(intervalId)
    }
  }, [])

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
