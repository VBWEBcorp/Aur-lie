'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { CtaSection } from '@/components/sections/cta-section'

const ease = [0.22, 1, 0.36, 1] as const

const formats = [
  {
    n: '01',
    title: 'Coaching individuel',
    line: '6 mois pour identifier ce qui te retient, et aller chercher le niveau d’après.',
    href: '/coaching-individuel',
  },
  {
    n: '02',
    title: 'Cercle de dirigeants',
    line: 'Le déclic en groupe de pairs, dans un cadre qui sécurise la parole.',
    href: '/cercles-de-dirigeants',
  },
]

export function CoachingContent() {
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
              Coaching de dirigeant
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Deux manières de travailler ensemble
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              En face-à-face, ou en cercle. Le déclic peut venir des deux.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="divide-y divide-border/50">
            {formats.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="group py-8 lg:py-12"
              >
                <Link
                  href={f.href}
                  className="flex items-baseline gap-6 md:gap-12"
                >
                  <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                    {f.n}
                  </span>
                  <div className="flex flex-1 flex-wrap items-baseline gap-x-8 gap-y-2">
                    <h3 className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-4xl lg:text-5xl">
                      {f.title}
                    </h3>
                    <p className="text-base text-muted-foreground sm:text-lg">{f.line}</p>
                  </div>
                  <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
