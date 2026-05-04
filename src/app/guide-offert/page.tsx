import type { Metadata } from 'next'

import { GuideContent } from './guide-content'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Le guide offert d'Aurélie Foin pour les dirigeants qui passent au niveau suivant. Reçois-le directement dans ta boîte mail."

export const metadata: Metadata = {
  title: 'Guide offert',
  description,
  alternates: { canonical: '/guide-offert' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Guide offert', description, '/guide-offert'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Guide offert', path: '/guide-offert' },
    ]),
  ],
}

export default function GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideContent />
    </>
  )
}
