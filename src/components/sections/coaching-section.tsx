'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Compass, Users } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

const formats = [
  {
    n: '01',
    icon: Compass,
    title: 'Coaching individuel',
    line: "6 mois en face-à-face. Pour identifier ce qui te retient vraiment, et aller chercher tes ambitions sans devenir le dirigeant à qui tu ne veux pas ressembler.",
    cta: 'Découvrir le programme',
    href: '/coaching-individuel',
  },
  {
    n: '02',
    icon: Users,
    title: 'Cercle des dirigeants',
    line: "Le déclic en groupe de pairs. Là où on n'a plus à se justifier, dans un cadre qui sécurise la parole.",
    cta: 'Découvrir le cercle',
    href: '/cercles-de-dirigeants',
  },
]

export function CoachingSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Coaching de dirigeants
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-balance text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Deux manières de travailler ensemble.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pour les dirigeants TPE/PME qui ont prouvé qu&apos;ils pouvaient, et qui sentent qu&apos;il y a un palier d&apos;après.
            </p>
          </div>
          <Link
            href="/coaching"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Voir tout le coaching
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {formats.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
            >
              <Link
                href={f.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-8 shadow-[var(--shadow-sm)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] sm:p-10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-14 -top-14 size-44 rounded-full bg-primary/15 blur-3xl"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/20">
                    <f.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                    {f.n}
                  </span>
                </div>

                <h3 className="relative mt-8 font-display text-2xl leading-[1.08] tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                  {f.title}
                </h3>
                <p className="relative mt-4 flex-1 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {f.line}
                </p>

                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                  {f.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
