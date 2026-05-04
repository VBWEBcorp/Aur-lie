'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const figures = [
  { title: "L'Ambitieux", line: 'Qui veut foncer.' },
  { title: 'Le Bienveillant', line: 'Qui freine par loyauté.' },
  { title: "L'Anxieux", line: 'Qui anticipe le pire.' },
  { title: 'Le Visionnaire', line: 'Qui voit loin mais ne sait pas par où commencer.' },
]

export function SousPersonnalitesSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-16 md:items-end">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Mon approche
            </p>
            <h2 className="mt-6 font-display text-balance text-3xl leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              Chaque dirigeant a son propre conseil d&apos;administration intérieur.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Je travaille avec les sous-personnalités : ces parties de toi qui coexistent et qui, souvent, se contredisent.
            </p>
            <Button variant="outline" className="group mt-8" asChild>
              <Link href="/a-propos">
                Comprendre ma méthode
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {figures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.07 }}
                className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[var(--shadow-sm)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/15 blur-2xl"
                />
                <div className="relative">
                  <h3 className="font-display text-2xl leading-tight tracking-[-0.02em] text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">{f.line}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
