'use client'

import { motion } from 'framer-motion'

import { CtaSection } from '@/components/sections/cta-section'

const ease = [0.22, 1, 0.36, 1] as const

const references = [
  'Norauto',
  'Nordnet',
  'Communauté de Communes Pévèle Carembault',
  'Little Big Women',
]

export function TemoignagesContent() {
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
              Témoignages
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ils m&apos;ont fait confiance
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Quelques références
          </p>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-4 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            {references.map((r, i) => (
              <motion.span
                key={r}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="inline-flex items-baseline gap-4"
              >
                <span>{r}</span>
                {i < references.length - 1 ? (
                  <span aria-hidden className="text-primary/60">·</span>
                ) : null}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Bientôt
            </p>
            <h2 className="mt-6 font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Les retours dirigeants arrivent.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Cette section se construit au fil des accompagnements. En attendant, le mieux pour se faire une idée, c&apos;est encore de venir en parler 15 minutes.
            </p>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
