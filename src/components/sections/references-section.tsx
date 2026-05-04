'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const references = [
  'Norauto',
  'Nordnet',
  'Communauté de Communes Pévèle Carembault',
  'Little Big Women',
]

function ReferencesTrack() {
  const items = references.map((r) => (
    <span
      key={r}
      className="inline-flex shrink-0 items-center gap-12 font-display text-2xl font-light leading-[1.3] tracking-[-0.01em] text-foreground/85 sm:text-3xl lg:text-4xl"
    >
      {r}
      <span aria-hidden className="text-primary/50 text-base sm:text-lg">
        ●
      </span>
    </span>
  ))

  return (
    <div className="flex overflow-hidden">
      <div
        className="flex shrink-0 items-center gap-12 pr-12 animate-marquee-left"
        style={{ animationDuration: '50s' }}
      >
        {items}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-12 pr-12 animate-marquee-left"
        style={{ animationDuration: '50s' }}
      >
        {items}
      </div>
    </div>
  )
}

export function ReferencesSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Ils m&apos;ont fait confiance
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-balance text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Des équipes que j&apos;ai eu la chance d&apos;accompagner.
            </h2>
          </div>
          <Link
            href="/temoignages"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Voir tous les témoignages
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-border/50 py-12 sm:mt-20 sm:py-14 lg:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent sm:w-48"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent sm:w-48"
        />
        <ReferencesTrack />
      </div>

      <div className="pb-12 lg:pb-16" />
    </section>
  )
}
