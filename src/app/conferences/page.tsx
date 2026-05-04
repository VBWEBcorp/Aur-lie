import type { Metadata } from 'next'

import { ConferencesContent } from './conferences-content'
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Conférences pour dirigeants TPE/PME : équilibre, leadership, neurosciences. Une intervention qui marque."

export const metadata: Metadata = {
  title: 'Conférences',
  description,
  alternates: { canonical: '/conferences' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Conférences', description, '/conferences'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Coaching', path: '/coaching' },
      { name: 'Conférences', path: '/conferences' },
    ]),
    serviceJsonLd(
      'Conférences pour dirigeants',
      'Interventions pour événements de dirigeants, autour de l’équilibre et du leadership.',
      '/conferences',
    ),
  ],
}

export default function ConferencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConferencesContent />
    </>
  )
}
