import { DonationTracker } from "./donation-tracker"
import { DoodleStar, DoodleSun, DoodleUnderline, DoodleHeart } from "./doodles"

export function Hero({ raised, goal }: { raised: number; goal: number }) {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-12 pb-16 sm:px-6 sm:pt-16">
      <DoodleSun className="absolute left-6 top-10 hidden size-14 text-secondary sm:block" />
      <DoodleStar className="absolute right-10 top-24 hidden size-10 text-sky lg:block" />
      <DoodleHeart className="absolute bottom-10 left-1/4 hidden size-9 text-primary lg:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-foreground bg-grass px-4 py-1.5 text-sm font-semibold text-grass-foreground shadow-[3px_3px_0_0_var(--foreground)]">
            <DoodleStar className="size-4" />
            A fundraiser for a curious and creative future
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Help me to
            <span className="relative mx-2 inline-block text-primary">
              create
              <DoodleUnderline className="absolute -bottom-3 left-0 w-full text-secondary" />
            </span>
            & grow.
          </h1>

          <p className="mx-auto mt-8 max-w-md text-pretty text-lg leading-relaxed text-foreground/80 md:mx-0">
            Your donation can help me to give back to my animator community
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="https://www.buymeacoffee.com/bhddhbhushh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border-[3px] border-foreground bg-primary px-8 py-3.5 text-center text-lg font-bold text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-1 sm:w-auto"
            >
              Donate now
            </a>
          </div>
        </div>

        <div className="relative">
            <DonationTracker raised={raised} goal={goal} />
          
        </div>
      </div>
    </section>
  )
}
