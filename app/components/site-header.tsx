"use client"

import { type MouseEvent } from "react"
import { DoodleStar } from "./doodles"


const navLinks = [
  { label: "My Story", href: "#story" },
  { label: "How It Helps", href: "#help" },
  { label: "Supporters", href: "/supporters" },
]

function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return

  event.preventDefault()
  const target = document.getElementById(href.slice(1))
  target?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-foreground bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full border-[3px] border-foreground bg-primary text-primary-foreground">
            <DoodleStar className="size-5" />
          </span>
          <span className="text-xl font-bold tracking-tight">Help Animation to Thrive</span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href.slice(1))}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
