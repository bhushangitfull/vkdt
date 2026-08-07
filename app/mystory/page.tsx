import Image from "next/image"

const artImages = [
  "art1.png",
  "art2.png",
  "art3.png",
  "art4.png",
  "art5.png",
  "art6.png",
  "art7.png",
  "art8.png",
]

export const metadata = {
  title: "My Story — Art Showcase",
  description: "A gallery of the art shown in My Story, curated from public/images.",
}

export default function MyStoryPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-3xl border-[3px] border-foreground bg-white/80 p-8 shadow-[6px_6px_0_0_var(--foreground)] backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            My Story
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Art from the story
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/80 sm:text-lg">
            Explore the collection of art pieces created for this project. Each image is served from the app&apos;s public/images folder.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {artImages.map((filename) => (
            <article
              key={filename}
              className="overflow-hidden rounded-3xl border-[3px] border-foreground/10 bg-white/80 shadow-[4px_4px_0_0_var(--foreground)]"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={`/images/${filename}`}
                  alt={filename.replace(/\.[^.]+$/, "")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-foreground">{filename}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
