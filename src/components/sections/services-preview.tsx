'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  {
    n: '01',
    title: 'Coaching individuel',
    line: '6 mois, en face-à-face. Pour identifier ce qui te retient et aller chercher le niveau d’après.',
    href: '/coaching-individuel',
  },
  {
    n: '02',
    title: 'Cercle de dirigeants',
    line: 'Le déclic en groupe de pairs, dans un cadre qui sécurise la parole.',
    href: '/cercles-de-dirigeants',
  },
  {
    n: '03',
    title: 'Conférences',
    line: 'Leadership, prise de décision, connaissance de soi : pour des dirigeants et leurs équipes.',
    href: '/conferences',
  },
  {
    n: '04',
    title: 'Formations',
    line: 'Accompagnement au changement, gestion du stress, communication, leadership.',
    href: '/formations',
  },
]

export function ServicesPreview() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          Comment je travaille
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
          Quatre façons d&apos;aller chercher le niveau d&apos;après.
        </h2>

        <div className="mt-14 divide-y divide-border/50">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease, delay: i * 0.06 }}
              className="group py-7 lg:py-10"
            >
              <Link href={s.href} className="flex items-baseline gap-6 md:gap-12">
                <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                  {s.n}
                </span>
                <div className="flex flex-1 flex-wrap items-baseline gap-x-8 gap-y-2">
                  <h3 className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-4xl lg:text-5xl">
                    {s.title}
                  </h3>
                  <p className="text-base text-muted-foreground sm:text-lg">{s.line}</p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
