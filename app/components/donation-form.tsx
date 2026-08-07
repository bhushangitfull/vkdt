"use client"
import { DoodleHeart, DoodleStar } from "./doodles"
import { useState } from "react"


const presets = [0.5]

interface DonationFormProps {
  onSubmit?: (amount: number) => void
}

export function DonationForm({ onSubmit }: DonationFormProps) {
  const [amount, setAmount] = useState<number>(0.5)
  const [custom, setCustom] = useState("")
  const [frequency, setFrequency] = useState<"once" | "monthly">("once")
  const [done, setDone] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const activeAmount = custom ? Number(custom) : amount



  async function handleSubmit(e: React.FormEvent) {
    if (activeAmount <= 0) return
    onSubmit?.(activeAmount)
    window.open("https://buymeacoffee.com/vkgt", "_blank")
    setDone(true)
  }

  return (
    <section id="donate" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Make your support today
          </h2>
        </div>

        <div className="rounded-3xl border-[3px] border-foreground bg-card p-6 shadow-[8px_8px_0_0_var(--foreground)] sm:p-8">
          {done ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <span className="flex size-16 items-center justify-center rounded-full border-[3px] border-foreground bg-primary text-primary-foreground">
                <DoodleHeart className="size-8" />
              </span>
              <h3 className="text-3xl font-bold">Thank you! 🎨</h3>
              <p className="max-w-sm text-pretty text-foreground/70">
                +   We&apos;ve opened Buy Me a Coffee in a new tab — complete your{" "}
                {frequency === "monthly" ? "monthly " : ""}gift of{" "}
                <span className="font-bold text-foreground">${activeAmount || 0}</span> there to finish up.
                Thank you for supporting the community!
              </p>
              <button
                onClick={() => setDone(false)}
                className="mt-2 rounded-full border-[3px] border-foreground bg-secondary px-6 py-2.5 font-bold text-secondary-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
              >
                Give again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <fieldset>
                <legend className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground/60">
                  How often?
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {(["once", "monthly"] as const).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`rounded-full border-[3px] border-foreground py-2.5 font-bold capitalize transition-transform hover:-translate-y-0.5 ${frequency === f
                        ? "bg-grass text-grass-foreground shadow-[3px_3px_0_0_var(--foreground)]"
                        : "bg-card text-foreground"
                        }`}
                    >
                      {f === "once" ? "One time" : "Monthly"}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {presets.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setAmount(p)
                        setCustom("")
                      }}
                      className={`rounded-2xl border-[3px] border-foreground py-3 text-lg font-bold transition-transform hover:-translate-y-0.5 ${!custom && amount === p
                        ? "bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--foreground)]"
                        : "bg-card text-foreground"
                        }`}
                    >
                      ${p}
                    </button>
                  ))}
                </div>
                <div className="mt-3 flex items-center rounded-2xl border-[3px] border-foreground bg-background px-4 py-1">
                  <span className="text-lg font-bold text-foreground/60">$</span>
                  <input
                    type="number"
                    min="1"
                    inputMode="numeric"
                    placeholder="Other amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full bg-transparent px-2 py-2 text-lg font-semibold text-foreground outline-none placeholder:text-foreground/40"
                  />
                </div>
              </fieldset>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-bold uppercase tracking-wide text-foreground/60">Name</span>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={name} onChange={(e) => setName(e.target.value)}
                    className="rounded-2xl border-[3px] border-foreground bg-background px-4 py-2.5 font-medium text-foreground outline-none placeholder:text-foreground/40 focus:border-primary"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-bold uppercase tracking-wide text-foreground/60">Email</span>
                  <input
                    required
                    type="email"
                    placeholder="you@email.com"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="rounded-2xl border-[3px] border-foreground bg-background px-4 py-2.5 font-medium text-foreground outline-none placeholder:text-foreground/40 focus:border-primary"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full border-[3px] border-foreground bg-primary px-8 py-4 text-xl font-bold text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-1"
              >
                <DoodleStar className="size-5" />
                Donate ${custom || amount}
                {frequency === "monthly" ? "/mo" : ""}
              </button>
              <p className="text-center text-xs text-foreground/50">
                Secure & tax-deductible. You can cancel monthly gifts anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
