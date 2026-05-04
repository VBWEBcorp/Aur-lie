import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { siteConfig } from '@/lib/seo'

type Column = {
  label: string
  to?: string
  links: { label: string; to: string }[]
}

const columns: Column[] = [
  {
    label: 'Coaching de dirigeants',
    to: '/coaching',
    links: [
      { label: 'Coaching individuel', to: '/coaching-individuel' },
      { label: 'Cercle des dirigeants', to: '/cercles-de-dirigeants' },
    ],
  },
  {
    label: 'Conférences & Formations',
    links: [
      { label: 'Conférences', to: '/conferences' },
      { label: 'Formations', to: '/formations' },
    ],
  },
  {
    label: 'Ressources',
    links: [
      { label: 'Podcast', to: '/podcast' },
      { label: 'Journal', to: '/journal' },
      { label: 'Témoignages', to: '/temoignages' },
      { label: 'Guide offert', to: '/guide-offert' },
    ],
  },
  {
    label: 'Le site',
    links: [
      { label: 'Accueil', to: '/' },
      { label: 'À propos', to: '/a-propos' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Confidentialité', to: '/politique-de-confidentialite' },
  { label: 'CGU', to: '/conditions-generales' },
  { label: 'Cookies', to: '/politique-cookies' },
]

const socialLinks = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: Instagram },
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: Facebook },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] lg:gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white p-1">
                <img
                  src="https://i.ibb.co/3yzV7Tbd/LOGO-Aur-lie.png"
                  alt=""
                  className="size-full object-contain mix-blend-multiply"
                />
              </span>
              <span className="text-white">{siteConfig.name}</span>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-zinc-400">
              {siteConfig.description}
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="group flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-white/5 text-primary transition-colors group-hover:bg-white/10">
                  <Phone className="size-3.5" />
                </span>
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-white/5 text-primary transition-colors group-hover:bg-white/10">
                  <Mail className="size-3.5" />
                </span>
                {siteConfig.email}
              </a>
              {siteConfig.address.city ? (
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary">
                    <MapPin className="size-3.5" />
                  </span>
                  <span>{siteConfig.address.city}</span>
                </div>
              ) : null}
            </div>

            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <s.Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.label} aria-label={col.label}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {col.to ? (
                  <Link href={col.to} className="transition-colors hover:text-white">
                    {col.label}
                  </Link>
                ) : (
                  col.label
                )}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      href={l.to}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10" />

        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link
                  href={l.to}
                  className="text-xs text-zinc-500 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
