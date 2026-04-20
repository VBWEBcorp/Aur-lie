import type { Metadata } from 'next'

import { ServicesContent } from './services-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  "Coaching individuel pour dirigeant·e·s. Clarté, liberté, présence. Sans t'épuiser, ni tout changer."

export const metadata: Metadata = {
  title: 'Coaching',
  description,
  alternates: { canonical: '/services' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Coaching', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Coaching', path: '/services' },
    ]),
    serviceJsonLd(
      'Coaching de dirigeant·e·s',
      "Coaching individuel pour mêler réussite et équilibre. Clarté, liberté, présence. + de 2000h d'expérience.",
      '/services',
    ),
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
