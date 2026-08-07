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

const youtubeVideoIds = ["hQM7S8q2LNY", "VKbE_7qNmPw"]

export function MyStory() {
  return (
    <section
      id="story"
      style={{ scrollMarginTop: '96px' }}
      className="relative px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-3xl border-[3px] border-foreground bg-white/80 p-8 shadow-[6px_6px_0_0_var(--foreground)]">
          <p className="font-hand text-2xl text-primary">My Story</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The art that tells my story
          </h2>
          <div className="mt-4 max-w-4xl space-y-5 text-lg leading-8 text-foreground/80 sm:text-xl sm:leading-9">
            <p>
              Hi, I'm Vishwaratna Kamble — I go by Vishwa. I'm 17, currently in college, and I live in Ichalkaranji, a small city in Maharashtra. I got into animation the way a lot of us do — by falling in love with worlds someone else built. I don't have access to the kind of professional resources most aspiring animators dream of, so I started where I could: my mobile phone. Every sketch, every rough loop, every project you'll see below was made on a screen most people use for scrolling, not creating.
            </p>
            <p>
              I come from a <b>Scheduled Caste</b> family, and if you're not familiar with what that means in India, a quick search on <a href="https://www.google.com/search?q=caste+discrimination+and+reservation+fight+in+india&ie=UTF-8" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline decoration-2 underline-offset-4"><u>caste discrimination and reservation</u></a> will tell you more than I can in a few lines. In my family, the path has always been the same traditional line of work, generation after generation. I'm not trying to reject where I come from — I'm trying to add something new to it. I want to be a creator. Someone who builds stories and worlds the way <b>Hayao Miyazaki</b> does. Someone whose ideas reach people.
            </p>
            <p>
              That's why this fundraiser exists — I'm trying to get a decent graphic tablet, the kind of tool that could actually match what I'm trying to make. This website itself is proof I can't do this alone — <b>a friend</b> built it for me because he saw how much this means to me.
            </p>
            <p>
              The projects below aren't polished. I know they look like a beginner made them, because a beginner did. But every one of them is a step, and I'm hoping you'll help me take the next one.
            </p>
            <p className="font-semibold text-foreground">
              Even a small push from you could change what's possible for me.
            </p>
          </div>
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-2">
          {youtubeVideoIds.map((id, index) => (
            <div
              key={id}
              className="rounded-3xl border-[3px] border-foreground/10 bg-white/80 p-6 shadow-[4px_4px_0_0_var(--foreground)]"
            >
              <div className="aspect-video w-full overflow-hidden rounded-3xl bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`YouTube video player ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {artImages.map((filename) => (
            <article
              key={filename}
              className="overflow-hidden rounded-3xl border-[3px] border-foreground/10 bg-white/80 shadow-[4px_4px_0_0_var(--foreground)]"
            >
              <img
                src={`/images/${filename}`}
                alt={filename.replace(/\.[^.]+$/, "")}
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-foreground/70">
                  {filename.replace(/\.[^.]+$/, "")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
