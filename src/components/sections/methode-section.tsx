'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const leviers = [
  { title: 'Coaching certifié', line: 'Un cadre qui sécurise.' },
  { title: 'Neurosciences', line: 'Comprendre ce qui se passe vraiment.' },
  { title: 'PNL', line: 'Reprogrammer les automatismes.' },
  { title: 'Sous-personnalités', line: 'Faire travailler les parties ensemble.' },
]

export function MethodeSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-secondary/40">
      <div
        aria-hidden
        className="absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          Ma méthode
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-balance text-3xl leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
          Quatre outils, une seule boussole : ce qui change vraiment.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leviers.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur-sm"
            >
              <div className="mb-5 inline-flex size-9 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-semibold tabular-nums text-primary">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl leading-tight tracking-[-0.01em] text-foreground sm:text-2xl">
                {l.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                {l.line}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
