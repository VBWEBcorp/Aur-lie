'use client'

import { motion } from 'framer-motion'

import { CtaSection } from '@/components/sections/cta-section'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  hero: {
    eyebrow: 'Ma démarche',
    title: "Ton antidoute dans l'incertitude",
    description:
      "On est parfois surpris à quel point de minuscules changements peuvent avoir un impact énorme sur nos vies. Le coaching est un outil puissant et percutant. J'aide mes clients à faire ces changements subtils qui changent tout.",
    image: 'https://i.ibb.co/6JP99MCG/Aur-lie-2.jpg',
  },
  pillars: [
    { n: '01', word: 'Clarté', line: "Revenir à l'essentiel." },
    { n: '02', word: 'Liberté', line: 'Your rules, your game.' },
    { n: '03', word: 'Présence', line: "Sans t'épuiser, ni tout changer." },
  ],
  quote:
    "Plus on monte haut, plus il devient difficile de trouver des personnes qui nous parlent franchement, avec qui être dans la « vérité ». Je suis cette personne qui te dit ce que tu as le plus besoin d'entendre.",
  statline:
    "Je t'accompagne pour mêler réussite et équilibre, et aller vers des horizons qui te paraissaient impossibles à imaginer.",
}

export function AboutContent() {
  const { data } = useContent('about', defaults)
  const hero = { ...defaults.hero, ...((data as any).hero ?? {}) }
  const pillars = (data as any).pillars ?? defaults.pillars
  const quote = (data as any).quote ?? defaults.quote
  const statline = (data as any).statline ?? defaults.statline

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
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              {hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Mes appuis
          </p>
          <div className="mt-14 divide-y divide-border/50">
            {pillars.map((p: { n: string; word: string; line: string }, i: number) => (
              <motion.div
                key={p.word}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="group flex items-baseline gap-6 py-8 md:gap-12 lg:py-12"
              >
                <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                  {p.n}
                </span>
                <div className="flex flex-1 flex-wrap items-baseline gap-x-8 gap-y-2">
                  <h3 className="font-display text-4xl leading-none tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary sm:text-5xl lg:text-[4rem]">
                    {p.word}
                  </h3>
                  <p className="text-base text-muted-foreground sm:text-lg">{p.line}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-16">
            <motion.blockquote
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
              className="font-display text-balance text-3xl leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              <span
                aria-hidden
                className="mb-4 block font-display text-6xl leading-none text-primary/50 sm:text-7xl"
              >
                «
              </span>
              {quote}
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="relative mx-auto w-full max-w-sm md:max-w-none"
            >
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-primary/25 via-transparent to-transparent blur-2xl"
              />
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/70 shadow-[var(--shadow-md)]">
                <img
                  src={hero.image}
                  alt="Aurélie Foin"
                  className="size-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-5xl leading-[1] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl"
          >
            <span className="text-primary">+ de 2000h</span> de coaching.
          </motion.p>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {statline}
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
