'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Logo } from '@/components/layout/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

type SubLink = { to: string; label: string }
type NavSection = { label: string; to?: string; children: SubLink[] }

const sections: NavSection[] = [
  {
    label: 'Coaching de dirigeant',
    to: '/coaching',
    children: [
      { to: '/coaching-individuel', label: 'Coaching individuel' },
      { to: '/cercles-de-dirigeants', label: 'Cercle des dirigeants' },
    ],
  },
  {
    label: 'Conférences & Formations',
    children: [
      { to: '/conferences', label: 'Conférences' },
      { to: '/formations', label: 'Formations' },
    ],
  },
  {
    label: 'Ressources',
    children: [
      { to: '/podcast', label: 'Podcast' },
      { to: '/journal', label: 'Journal' },
      { to: '/temoignages', label: 'Témoignages' },
      { to: '/guide-offert', label: 'Guide offert' },
    ],
  },
]

function DesktopDropdown({
  section,
  pathname,
}: {
  section: NavSection
  pathname: string
}) {
  const [open, setOpen] = useState(false)

  const isActive =
    section.to === pathname || section.children.some((c) => c.to === pathname)

  const triggerClass = cn(
    'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60',
    isActive ? 'text-foreground' : 'text-muted-foreground',
  )

  const triggerInner = (
    <>
      {section.label}
      <ChevronDown
        className={cn(
          'size-3.5 opacity-60 transition-transform',
          open && 'rotate-180',
        )}
      />
    </>
  )

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {section.to ? (
        <Link href={section.to} className={triggerClass}>
          {triggerInner}
        </Link>
      ) : (
        <button type="button" className={triggerClass} onClick={() => setOpen((v) => !v)}>
          {triggerInner}
        </button>
      )}

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease }}
            className="absolute left-0 top-full z-50 w-64 pt-2"
          >
            <div className="overflow-hidden rounded-xl border border-border/70 bg-background shadow-[var(--shadow-md)]">
              {section.children.map((c) => (
                <Link
                  key={c.to}
                  href={c.to}
                  className={cn(
                    'block px-4 py-3 text-sm font-medium transition-colors hover:bg-muted',
                    pathname === c.to
                      ? 'bg-muted/40 text-foreground'
                      : 'text-muted-foreground',
                  )}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navigation principale"
        >
          {sections.map((s) => (
            <DesktopDropdown key={s.label} section={s} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button size="sm" asChild>
            <Link href="/contact">Me rencontrer</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="rounded-full"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            className="border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {sections.map((s) => (
                <details key={s.label} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted">
                    {s.label}
                    <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                    {s.children.map((c) => (
                      <Link
                        key={c.to}
                        href={c.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted',
                          pathname === c.to ? 'text-foreground' : 'text-muted-foreground',
                        )}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
              <div className="mt-2 border-t border-border/60 pt-4">
                <Button className="w-full" asChild>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Me rencontrer
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
