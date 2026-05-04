'use client'

import { motion } from 'framer-motion'

import { CtaSection } from '@/components/sections/cta-section'

const ease = [0.22, 1, 0.36, 1] as const

type Reference = {
  n: string
  name: string
  kind: string
  year: string
  detail: string
}

const references: Reference[] = [
  {
    n: '01',
    name: 'Norauto',
    kind: 'Formation',
    year: '2024',
    detail:
      "Cycle de formation au leadership et à la conduite du changement pour une douzaine de managers, sur trois jours répartis dans l'année.",
  },
  {
    n: '02',
    name: 'Nordnet',
    kind: 'Conférence',
    year: '2023',
    detail:
      "Conférence « Devenir invincible face à l'incertitude » donnée en plénière, devant une centaine de collaborateurs réunis pour le séminaire annuel.",
  },
  {
    n: '03',
    name: 'Communauté de Communes Pévèle Carembault',
    kind: 'Atelier',
    year: '2024',
    detail:
      "Atelier de codéveloppement sur la prise de décision en contexte tendu, pour le comité de direction et l'encadrement intermédiaire.",
  },
  {
    n: '04',
    name: 'Little Big Women',
    kind: 'Conférence',
    year: '2023',
    detail:
      "Intervention d'ouverture sur le leadership et la connaissance de soi, à l'occasion d'une rencontre annuelle dédiée aux femmes dirigeantes.",
  },
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
          <div className="max-w-2xl">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Quelques références
            </p>
            <h2 className="mt-6 font-display text-balance text-3xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              Des équipes que j&apos;ai eu la chance d&apos;accompagner.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-border/60">
            {references.map((r, i) => (
              <motion.article
                key={r.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="grid gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10 md:py-10"
              >
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                    {r.n}
                  </span>
                  <h3 className="font-display text-2xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-3xl lg:text-4xl">
                    {r.name}
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {r.detail}
                </p>

                <div className="flex shrink-0 items-center gap-3 text-xs font-medium tracking-wide uppercase md:flex-col md:items-end md:gap-1.5">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">
                    {r.kind}
                  </span>
                  <span className="text-muted-foreground/80">{r.year}</span>
                </div>
              </motion.article>
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
