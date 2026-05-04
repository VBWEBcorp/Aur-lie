'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ValuesMarquee } from '@/components/sections/values-marquee'
import { Button } from '@/components/ui/button'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const
const INTERVAL = 5000

const defaults = {
  title: "L'antidoute des dirigeants qui passent au niveau suivant",
  description:
    "Je ne coache pas des objectifs. J'accompagne des personnes, pour qu'elles aillent chercher leurs ambitions sans devenir quelqu'un qu'elles ne veulent pas être.",
  button: 'Me rencontrer',
  avatar: 'https://i.ibb.co/6JP99MCG/Aur-lie-2.jpg',
  images: [
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80',
  ],
}

export function HeroSection() {
  const { data } = useContent('home', { hero: defaults })
  const hero = { ...defaults, ...((data as any).hero ?? {}) }
  const images: string[] = hero.images ?? defaults.images
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section className="relative isolate overflow-hidden border-b border-border/60">
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={images[current]}
            alt=""
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="mx-auto mb-10 size-40 overflow-hidden rounded-full border-[4px] border-white/90 shadow-[0_18px_48px_rgba(0,0,0,0.45)] ring-2 ring-primary/40 sm:size-48 lg:size-56"
          >
            <img
              src={hero.avatar}
              alt="Aurélie Foin"
              className="size-full object-cover object-top"
              loading="eager"
              width={224}
              height={224}
            />
          </motion.div>

          <h1 className="font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
            {hero.description}
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                {hero.button}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Image ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-white' : 'w-4 bg-white/35 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <ValuesMarquee variant="dark" />
      </div>
    </section>
  )
}
