'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_FORM_ID'

export function LeadMagnetSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError('Une erreur est survenue. Réessaie dans un instant.')
      }
    } catch {
      setError("Impossible d'envoyer pour le moment. Réessaie dans un instant.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Guide offert
          </p>
          <h2 className="mt-6 font-display text-balance text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Pour les dirigeants qui passent au niveau suivant.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Reçois-le directement dans ta boîte mail.
          </p>

          {submitted ? (
            <div className="mx-auto mt-10 max-w-md">
              <p className="font-display text-2xl leading-tight tracking-[-0.02em] text-foreground sm:text-3xl">
                Vérifie ta boîte mail.
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Le guide arrive d&apos;ici quelques instants.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3"
            >
              <input
                name="firstname"
                placeholder="Ton prénom"
                autoComplete="given-name"
                required
                className="h-12 w-full rounded-full border border-border bg-background px-5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
              />
              <input
                name="email"
                type="email"
                placeholder="ton@email.fr"
                autoComplete="email"
                required
                className="h-12 w-full rounded-full border border-border bg-background px-5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
              />
              <input
                type="hidden"
                name="_subject"
                value="Nouvelle demande de guide offert (home)"
              />
              <Button
                type="submit"
                size="lg"
                className="group mt-2 h-12 w-full rounded-full"
                disabled={submitting}
              >
                <Mail className="size-4" />
                {submitting ? 'Envoi…' : 'Recevoir le guide'}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>
              {error ? (
                <p className="mt-1 text-sm text-destructive">{error}</p>
              ) : null}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
