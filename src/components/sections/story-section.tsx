'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  eyebrow: 'À propos',
  title: "J'ai dirigé sous pression avant d'accompagner ceux qui le font.",
  paragraph1:
    "Je viens du monde de l'IT, où j'ai été ingénieure puis manager d'équipes pendant 8 ans. J'ai vécu de l'intérieur ce que c'est que de diriger sous pression, de douter sans pouvoir le montrer, de performer en se perdant un peu en chemin.",
  paragraph2:
    "Je travaille avec les sous-personnalités de chaque dirigeant : l'Ambitieux, le Bienveillant, l'Anxieux, le Visionnaire. Mon rôle, c'est de les faire travailler ensemble pour que les décisions deviennent plus claires et plus alignées avec qui tu es vraiment.",
  image: 'https://i.ibb.co/6JP99MCG/Aur-lie-2.jpg',
}

export function StorySection() {
  const { data } = useContent('home', { story: defaults })
  const story = data.story ?? defaults

  return (
    <section className="border-b border-border/60 bg-muted/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-14 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease }}
            className="relative mx-auto w-full max-w-sm md:max-w-none"
          >
            <div aria-hidden className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-primary/15 via-transparent to-transparent blur-2xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/80 bg-muted/40 shadow-[var(--shadow-md)] ring-1 ring-foreground/5">
              <img
                src={story.image}
                alt="Aurélie Foin, coach de dirigeant·e·s"
                className="size-full object-cover object-center"
                loading="lazy"
                width={800}
                height={1067}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease, delay: 0.06 }}
            className="space-y-6"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              {story.eyebrow}
            </p>
            <h2 className="font-display text-balance text-4xl leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              {story.title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {story.paragraph1}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {story.paragraph2}
            </p>
            <Button variant="outline" className="group" asChild>
              <Link href="/a-propos">
                Mon parcours
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
