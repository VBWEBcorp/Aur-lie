'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getPublishedPosts } from '@/lib/data/blog'

const ease = [0.22, 1, 0.36, 1] as const

export function JournalPreviewSection() {
  const posts = getPublishedPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Le journal
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-balance text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Chaque semaine, une question pour revenir à l&apos;essentiel.
            </h2>
          </div>
          <Button variant="outline" className="group" asChild>
            <Link href="/journal">
              Lire le journal
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
            >
              <Link href={`/journal/${p.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-muted">
                  <img
                    src={p.coverImage}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5">
                  <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    {p.category}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-base text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                    Lire l&apos;article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
