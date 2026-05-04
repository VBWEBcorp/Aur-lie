'use client'

import { motion } from 'framer-motion'

import { CtaSection } from '@/components/sections/cta-section'

const ease = [0.22, 1, 0.36, 1] as const

const episodes = [
  {
    n: '01',
    title: "Le pire ennemi de ta prise de parole en public",
    youtubeId: 'r5KPTVkM5CE',
  },
  {
    n: '02',
    title: 'Devenir invincible face à l’incertitude',
    youtubeId: 'bbUTe89EOQ8',
  },
]

export function PodcastContent() {
  return (
    <>
      <section className="relative flex min-h-[340px] items-center overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
              Podcast
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Conversations et interventions
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              Des prises de parole, des entretiens, des éclairages pour les dirigeants qui veulent voir clair.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
            {episodes.map((e, i) => (
              <motion.article
                key={e.youtubeId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="space-y-4"
              >
                <div className="aspect-video overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-[var(--shadow-md)]">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${e.youtubeId}`}
                    title={e.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                    {e.n}
                  </span>
                  <h2 className="font-display text-2xl leading-tight tracking-[-0.02em] text-foreground sm:text-3xl">
                    {e.title}
                  </h2>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
