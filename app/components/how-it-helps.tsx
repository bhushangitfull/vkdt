import { DoodleArrow } from "./doodles"

const changes = [
  {
    title: "From guessing to control",
    body: "Pressure sensitivity means every line can be as thin, thick, soft, or bold as the moment needs — not what a touchscreen happens to allow.",
  },
  {
    title: "From cramped to full scenes",
    body: "A proper canvas means backgrounds, characters, and motion can finally share space instead of being squeezed into a 6-inch frame.",
  },
  {
    title: "From stiff to alive",
    body: "Smoother strokes mean smoother animation — the difference between a doodle and a scene that actually moves.",
  },
  {
    title: "From limits to ideas",
    body: "Right now, half my energy goes into working around my tools. A tablet means all of it goes into the story.",
  },
]

export function HowItHelps() {
  return (
    <section id="help" className="relative px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <p className="font-hand text-2xl text-primary">where your money goes</p>
          <DoodleArrow className="mt-2 hidden size-16 text-sky md:block" />
        </div>

        <div className="mb-10 rounded-3xl border-[3px] border-foreground bg-white/80 p-8 shadow-[6px_6px_0_0_var(--foreground)]">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why a Graphic Tablet?
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-foreground/80 sm:text-xl sm:leading-9">
            Right now, every line I draw starts with my finger tracing across a phone screen —
            no pressure sensitivity, no precision, no room to breathe. It works, but barely. A
            graphics tablet would let me actually draw the way animators draw: naturally, with
            control, without fighting the tool just to get an idea onto the screen.
          </p>
        </div>

        <div className="mb-10 grid gap-6 sm:grid-cols-2">
          {changes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border-[3px] border-foreground/10 bg-white/80 p-6 shadow-[4px_4px_0_0_var(--foreground)]"
            >
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-base leading-7 text-foreground/80 sm:text-lg">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border-[3px] border-foreground bg-primary/10 p-8 text-center shadow-[6px_6px_0_0_var(--foreground)]">
          <p className="font-hand text-2xl text-primary">the honest part</p>
          <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Where Your Donation Goes
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl sm:leading-9">
            This isn't a vague ask. It's one clear goal: a mid-range drawing tablet that can keep
            up with what I'm trying to make. No stretch goals, no extras — just the one tool
            standing between where I am and where I'm trying to go.
          </p>
        </div>
      </div>
    </section>
  )
}