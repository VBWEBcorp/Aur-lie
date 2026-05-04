'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const episodes = [
  {
    title: "Le pire ennemi de ta prise de parole en public",
    youtubeId: 'r5KPTVkM5CE',
  },
  {
    title: "Devenir invincible face à l'incertitude",
    youtubeId: 'bbUTe89EOQ8',
  },
]

export function PodcastPreviewSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Podcast
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-balance text-3xl leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              Conversations et interventions à regarder.
            </h2>
          </div>
          <Button variant="outline" className="group" asChild>
            <Link href="/podcast">
              Tous les épisodes
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
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
              <h3 className="font-display text-xl leading-tight tracking-[-0.02em] text-foreground sm:text-2xl">
                {e.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
