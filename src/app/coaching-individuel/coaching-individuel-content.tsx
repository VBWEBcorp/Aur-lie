'use client'

import { motion } from 'framer-motion'

import { CtaSection } from '@/components/sections/cta-section'

const ease = [0.22, 1, 0.36, 1] as const

const outcomes = [
  { n: '01', title: 'Des décisions qui te ressemblent', line: 'Sans te prendre la tête pendant trois jours.' },
  { n: '02', title: 'Un leadership plus juste', line: 'Aligné avec qui tu es vraiment.' },
  { n: '03', title: "L'énergie d'aller chercher", line: 'Ce que tu veux vraiment.' },
]

export function CoachingIndividuelContent() {
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
              Coaching individuel
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              6 mois pour passer au niveau suivant
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              Pour les dirigeants qui ont prouvé qu&apos;ils pouvaient et qui voient le niveau d&apos;après.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Pour qui
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Pour ceux qui n&apos;attendent que le déclic.
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <p>
              Des dirigeants qui ont prouvé qu&apos;ils pouvaient. Qui voient le niveau d&apos;après. Et qui sentent que quelque chose freine, sans réussir à mettre le doigt dessus.
            </p>
            <p>
              Pas ceux qu&apos;il faut pousser. Ceux qui n&apos;attendent que le déclic.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-balance text-3xl leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            <span aria-hidden className="mb-4 block font-display text-6xl leading-none text-primary/50 sm:text-7xl">
              «
            </span>
            J&apos;aide les dirigeants à identifier ce qui les retient vraiment, pour qu&apos;ils aillent chercher leurs ambitions sans devenir quelqu&apos;un qu&apos;ils ne veulent pas être.
          </motion.blockquote>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Comment
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            En allant chercher ce qui se passe vraiment à l&apos;intérieur.
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <p>
              Pas juste en surface. J&apos;utilise le coaching, les neurosciences et des outils de régulation émotionnelle pour des changements qui tiennent dans la durée.
            </p>
            <p>En individuel sur 6 mois.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Ce qu&apos;on obtient ensemble
          </p>
          <div className="mt-12 divide-y divide-border/50">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="flex items-baseline gap-6 py-7 md:gap-12 lg:py-10"
              >
                <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                  {o.n}
                </span>
                <div className="flex flex-1 flex-wrap items-baseline gap-x-8 gap-y-2">
                  <h3 className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
                    {o.title}
                  </h3>
                  <p className="text-base text-muted-foreground sm:text-lg">{o.line}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
