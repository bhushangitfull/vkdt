import { Redis } from "@upstash/redis"
import { SiteHeader } from "../components/site-header"

const redis = Redis.fromEnv()
export const dynamic = "force-dynamic"
export const revalidate = 0

type Supporter = {
  amount: number
  name: string
  message: string
  at: string
}

async function getSupporters() {
  const raw = await redis.lrange("donation_log", 0, 99)
  return raw.map((item) => {
    const supporter = JSON.parse(item as string) as Supporter
    return {
      amount: Number(supporter.amount ?? 0),
      name: supporter.name ?? "Anonymous",
      message: supporter.message ?? "",
      at: supporter.at ?? "",
    }
  })
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return ""
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

export default async function SupportersPage() {
  const supporters = await getSupporters()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <section className="rounded-3xl border-[3px] border-foreground/10 bg-background/90 p-8 shadow-sm shadow-foreground/5">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Supporters
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Thank you to everyone who made this possible.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-foreground/70 sm:text-lg">
              Here are the latest donations and messages from your supporters.
            </p>
          </div>

          {supporters.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-foreground/20 p-10 text-center text-foreground/70">
              No support entries found yet.
            </div>
          ) : (
            <div className="space-y-4">
              {supporters.map((supporter, index) => (
                <div
                  key={`${supporter.name}-${index}-${supporter.at}`}
                  className="rounded-3xl border border-foreground/10 bg-foreground/5 p-6"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {supporter.name}
                      </p>
                      <p className="mt-1 text-sm text-foreground/60">
                        {formatDate(supporter.at)}
                      </p>
                    </div>
                    <p className="text-lg font-semibold text-primary">
                      {formatCurrency(supporter.amount)}
                    </p>
                  </div>
                  {supporter.message ? (
                    <p className="mt-4 text-sm leading-7 text-foreground/80">
                      “{supporter.message}”
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
