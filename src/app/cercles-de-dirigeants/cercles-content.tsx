'use client'

import { motion } from 'framer-motion'

import { CtaSection } from '@/components/sections/cta-section'

const ease = [0.22, 1, 0.36, 1] as const

export function CerclesContent() {
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
              Cercles de dirigeants
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Le déclic, en groupe de pairs
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              Là où on n&apos;a plus à se justifier. Là où on entend ce qu&apos;on a vraiment besoin d&apos;entendre.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Le format
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Un cercle restreint, animé sur la durée.
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <p>
              Plus on monte haut, plus il devient difficile de trouver des personnes avec qui être dans la « vérité ». Le cercle, c&apos;est cet espace : entre pairs, sans posture, avec un cadre qui sécurise la parole.
            </p>
            <p>
              On y pose les vraies questions. On y avance les vraies décisions.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
