'use client'

import { motion } from 'framer-motion'

import { CtaSection } from '@/components/sections/cta-section'

const ease = [0.22, 1, 0.36, 1] as const

const themes = [
  {
    n: '01',
    title: 'Accompagnement au changement',
    line: 'Pour traverser les transformations sans casser la dynamique humaine.',
  },
  {
    n: '02',
    title: 'Gestion du stress',
    line: 'Comprendre ce qui se joue, et reprendre la main avec des outils concrets.',
  },
  {
    n: '03',
    title: 'Communication interpersonnelle',
    line: 'Pour des échanges plus justes, plus directs, plus utiles.',
  },
  {
    n: '04',
    title: 'Développement du leadership',
    line: 'Asseoir une posture qui te ressemble et qui embarque.',
  },
]

export function FormationsContent() {
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
              Formations
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pour les équipes et les comités de direction
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              Des formations sur-mesure, pensées pour des humains qui dirigent ou qui dirigeront.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Les thèmes
          </p>
          <div className="mt-14 divide-y divide-border/50">
            {themes.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="flex items-baseline gap-6 py-8 md:gap-12 lg:py-12"
              >
                <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                  {t.n}
                </span>
                <div className="flex flex-1 flex-wrap items-baseline gap-x-8 gap-y-2">
                  <h3 className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[3rem]">
                    {t.title}
                  </h3>
                  <p className="text-base text-muted-foreground sm:text-lg">{t.line}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Aussi
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Team building et animation d&apos;ateliers.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Pour faire travailler ensemble, vraiment. Sortir des postures, créer des liens utiles, ressouder une équipe autour de ce qui compte.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
