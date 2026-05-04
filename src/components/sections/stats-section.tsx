'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

type Stat = {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

const stats: Stat[] = [
  {
    value: 2000,
    prefix: '+ ',
    label: 'heures de coaching de dirigeants',
  },
  {
    value: 8,
    suffix: ' ans',
    label: 'à diriger en IT, avant le coaching',
  },
  {
    value: 6,
    suffix: ' mois',
    label: 'de parcours individuel en face-à-face',
  },
]

function CountUp({
  to,
  inView,
  prefix = '',
  suffix = '',
}: {
  to: number
  inView: boolean
  prefix?: string
  suffix?: string
}) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const duration = 1600
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(eased * to))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span>
      {prefix}
      {n.toLocaleString('fr-FR')}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-border/60 bg-secondary/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-accent/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border/60">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className="relative text-center sm:px-8 lg:px-10"
            >
              <div className="font-display text-5xl font-medium leading-none tracking-[-0.04em] text-primary sm:text-6xl lg:text-7xl">
                <CountUp
                  to={s.value}
                  inView={inView}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <p className="mx-auto mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
