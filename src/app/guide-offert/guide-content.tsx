'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ease = [0.22, 1, 0.36, 1] as const

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_FORM_ID'

export function GuideContent() {
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
        setError("Une erreur est survenue. Réessaie dans un instant.")
      }
    } catch {
      setError("Impossible d'envoyer pour le moment. Réessaie dans un instant.")
    } finally {
      setSubmitting(false)
    }
  }

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
              Guide offert
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pour les dirigeants qui passent au niveau suivant
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              Reçois le guide directement dans ta boîte mail.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="text-center"
            >
              <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                C&apos;est parti
              </p>
              <h2 className="mt-6 font-display text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
                Vérifie ta boîte mail.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Le guide arrive d&apos;ici quelques instants. Pense à regarder dans tes spams au cas où.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="firstname">Prénom</Label>
                <Input id="firstname" name="firstname" placeholder="Ton prénom" autoComplete="given-name" required className="h-11 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="ton@email.fr" autoComplete="email" required className="h-11 rounded-xl" />
              </div>
              <input type="hidden" name="_subject" value="Nouvelle demande de guide offert" />
              <Button type="submit" size="lg" className="group w-full" disabled={submitting}>
                <Mail className="size-4" />
                {submitting ? 'Envoi…' : 'Recevoir le guide'}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>
              {error ? (
                <p className="text-center text-sm text-destructive">{error}</p>
              ) : null}
              <p className="text-center text-xs text-muted-foreground">
                Tu peux te désabonner à tout moment. On respecte ta boîte mail.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </>
  )
}
