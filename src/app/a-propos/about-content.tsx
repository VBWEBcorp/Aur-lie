'use client'

import { motion } from 'framer-motion'

import { CtaSection } from '@/components/sections/cta-section'

const ease = [0.22, 1, 0.36, 1] as const

const personnalites = [
  { n: '01', title: "L'Ambitieux", line: 'Qui veut foncer.' },
  { n: '02', title: 'Le Bienveillant', line: 'Qui freine par loyauté.' },
  { n: '03', title: "L'Anxieux", line: 'Qui anticipe le pire.' },
  { n: '04', title: 'Le Visionnaire', line: 'Qui voit loin mais ne sait pas par où commencer.' },
]

const leviers = [
  { n: '01', title: 'Coaching certifié', line: 'Un cadre qui sécurise, qui mène à des décisions claires.' },
  { n: '02', title: 'Neurosciences', line: 'Pour comprendre ce qui se passe vraiment, pas juste en surface.' },
  { n: '03', title: 'PNL', line: 'Pour reprogrammer les automatismes qui tournent en boucle.' },
  { n: '04', title: 'Sous-personnalités', line: "Pour faire travailler ensemble les parties qui se contredisent." },
]

const valeurs = [
  'Authenticité',
  'Lucidité',
  'Bienveillance sans complaisance',
  'Humour',
  'Profondeur',
]

export function AboutContent() {
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
              À propos
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              L&apos;antidoute des dirigeants qui passent au niveau suivant
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              Je ne coache pas des objectifs. J&apos;accompagne des personnes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            D&apos;où je viens
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            J&apos;ai dirigé sous pression avant d&apos;accompagner ceux qui le font.
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <p>
              Je viens du monde de l&apos;IT, où j&apos;ai été ingénieure puis manager d&apos;équipes pendant 8 ans. J&apos;ai vécu de l&apos;intérieur ce que c&apos;est que de diriger sous pression, de douter sans pouvoir le montrer, de performer en se perdant un peu en chemin.
            </p>
            <p>
              C&apos;est cette expérience qui m&apos;a amenée au coaching, pas par reconversion par défaut, mais par conviction que les dirigeants méritent un espace où les vraies questions ont le droit d&apos;exister.
            </p>
            <p>
              Je comprends les enjeux business autant que les mécanismes intérieurs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Mon approche
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Chaque dirigeant a son propre conseil d&apos;administration intérieur.
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <p>
              Je travaille avec les sous-personnalités de chaque dirigeant : ces différentes parties de soi qui coexistent et qui, souvent, se contredisent.
            </p>
          </div>

          <div className="mt-12 divide-y divide-border/50">
            {personnalites.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="flex items-baseline gap-6 py-7 md:gap-12 lg:py-9"
              >
                <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                  {p.n}
                </span>
                <div className="flex flex-1 flex-wrap items-baseline gap-x-8 gap-y-2">
                  <h3 className="font-display text-2xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-3xl lg:text-4xl">
                    {p.title}
                  </h3>
                  <p className="text-base text-muted-foreground sm:text-lg">{p.line}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Mon travail, c&apos;est d&apos;aider ces parties à cesser de se battre pour travailler ensemble. Pour que les décisions deviennent plus claires, plus justes, plus alignées avec qui tu es vraiment.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Mes leviers
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Quatre outils, une seule boussole : ce qui change vraiment.
          </h2>
          <div className="mt-12 divide-y divide-border/50">
            {leviers.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="flex items-baseline gap-6 py-7 md:gap-12 lg:py-9"
              >
                <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70">
                  {l.n}
                </span>
                <div className="flex flex-1 flex-wrap items-baseline gap-x-8 gap-y-2">
                  <h3 className="font-display text-2xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-3xl lg:text-4xl">
                    {l.title}
                  </h3>
                  <p className="text-base text-muted-foreground sm:text-lg">{l.line}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Mes valeurs
          </p>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-4 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            {valeurs.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="inline-flex items-baseline gap-3"
              >
                <span>{v}</span>
                {i < valeurs.length - 1 ? (
                  <span aria-hidden className="text-primary/60">·</span>
                ) : null}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
