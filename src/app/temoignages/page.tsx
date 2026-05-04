import type { Metadata } from 'next'

import { TemoignagesContent } from './temoignages-content'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Témoignages de dirigeants accompagnés par Aurélie Foin, coach équilibre du dirigeant à Lille."

export const metadata: Metadata = {
  title: 'Témoignages',
  description,
  alternates: { canonical: '/temoignages' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Témoignages', description, '/temoignages'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Témoignages', path: '/temoignages' },
    ]),
  ],
}

export default function TemoignagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TemoignagesContent />
    </>
  )
}
