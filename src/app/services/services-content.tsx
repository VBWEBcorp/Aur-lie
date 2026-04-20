'use client'

import { motion } from 'framer-motion'

import { CtaSection } from '@/components/sections/cta-section'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

type Row = { n: string; title: string; line: string }

const defaults = {
  hero: {
    eyebrow: 'Coaching',
    title: 'Tu te reconnais ?',
    description:
      "Les points communs entre mes clients — et leurs défis. Si tu te reconnais, on va s'entendre.",
  },
  positives: [
    { n: '01', title: 'Talentueux·se et ambitieux·se', line: "J'adore cet état d'esprit." },
    { n: '02', title: "Dans l'action", line: "Tu adores être dans l'action." },
    { n: '03', title: "L'habitude de réussir", line: "Tu as l'habitude de réussir ce que tu entreprends." },
    { n: '04', title: 'Haut niveau de qualité', line: "Tu veux offrir un haut niveau de qualité à tes clients." },
  ],
  transition: "J'adore cet état d'esprit.",
  challenges: [
    { n: '05', title: "Tendance à l'épuisement", line: "Tu as tendance à t'épuiser." },
    { n: '06', title: 'Beaucoup de doutes', line: "L'impression qu'il n'y a pas de mérite sans efforts." },
    { n: '07', title: 'Réticences à déléguer', line: "Tu as du mal à lâcher." },
    { n: '08', title: "Mal à t'arrêter", line: 'Et à célébrer tes succès.' },
  ],
  closing:
    "Si tu te reconnais, c'est exactement là qu'on va travailler ensemble. Your rules, your game.",
}

function List({ rows }: { rows: Row[] }) {
  return (
    <div className="divide-y divide-border/50">
      {rows.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease, delay: i * 0.07 }}
          className="group flex items-baseline gap-6 py-7 md:gap-12 lg:py-10"
        >
          <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
            {r.n}
          </span>
          <div className="flex flex-1 flex-wrap items-baseline gap-x-8 gap-y-2">
            <h3 className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-4xl lg:text-5xl">
              {r.title}
            </h3>
            <p className="text-base text-muted-foreground sm:text-lg">{r.line}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function ServicesContent() {
  const { data } = useContent('services', defaults)
  const hero = { ...defaults.hero, ...((data as any).hero ?? {}) }
  const positives = (data as any).positives ?? defaults.positives
  const transition = (data as any).transition ?? defaults.transition
  const challenges = (data as any).challenges ?? defaults.challenges
  const closing = (data as any).closing ?? defaults.closing

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
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Les points communs
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
            Tu es talentueux·se, ambitieux·se, tu adores l&apos;action.
          </h2>
          <div className="mt-12">
            <List rows={positives} />
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
            className="relative font-display text-balance text-4xl leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl"
          >
            <span
              aria-hidden
              className="absolute -left-2 -top-8 font-display text-7xl leading-none text-primary/60 sm:text-8xl"
            >
              «
            </span>
            {transition}
          </motion.blockquote>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Et en même temps, il y a l&apos;envers du décor.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Et en même temps
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
            Tu t&apos;épuises, tu doutes, tu as du mal à célébrer.
          </h2>
          <div className="mt-12">
            <List rows={challenges} />
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="max-w-4xl font-display text-balance text-3xl leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
          >
            {closing}
          </motion.p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
