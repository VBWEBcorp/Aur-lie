'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const offers = [
  {
    n: '01',
    title: 'Conférences',
    line: 'Sur le leadership, la prise de décision et la connaissance de soi. Pour des dirigeants et leurs équipes.',
    cta: 'Découvrir les conférences',
    href: '/conferences',
  },
  {
    n: '02',
    title: 'Formations',
    line: 'Accompagnement au changement, gestion du stress, communication interpersonnelle, leadership. Aussi team building et ateliers.',
    cta: 'Découvrir les formations',
    href: '/formations',
  },
]

export function EntreprisesSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-secondary/40">
      <div
        aria-hidden
        className="absolute -left-32 top-1/3 h-[440px] w-[440px] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="relative order-2 mx-auto w-full max-w-sm md:sticky md:top-24 md:order-1 md:max-w-none md:self-start"
          >
            <div aria-hidden className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-primary/15 via-transparent to-transparent blur-2xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-[var(--shadow-md)] ring-1 ring-foreground/5">
              <img
                src="https://i.ibb.co/BVsH90Dq/Aur-lie.png"
                alt="Aurélie Foin en intervention"
                loading="lazy"
                className="size-full object-cover object-center"
                width={800}
                height={1067}
              />
            </div>
          </motion.div>

          <div className="order-1 flex flex-col md:order-2">
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                Pour les entreprises
              </p>
              <h2 className="mt-6 font-display text-balance text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl">
                Conférences et formations sur-mesure.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Au-delà du coaching individuel, j&apos;interviens en entreprise sur le leadership, la prise de décision, la gestion du stress et la communication.
              </p>
            </div>

            <div className="mt-10 divide-y divide-border/60">
              {offers.map((o, i) => (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                  className="group py-7 first:pt-0 last:pb-0 sm:py-8"
                >
                  <Link href={o.href} className="block">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-xs font-medium tabular-nums text-muted-foreground/70">
                          {o.n}
                        </span>
                        <h3 className="font-display text-2xl leading-[1.1] tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                          {o.title}
                        </h3>
                      </div>
                      <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <p className="mt-3 max-w-xl pl-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {o.line}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <Button className="group mt-10 self-start" asChild>
              <Link href="/contact">
                Discuter d&apos;une intervention
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
