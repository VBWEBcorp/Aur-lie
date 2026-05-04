import type { Metadata } from 'next'

import { FormationsContent } from './formations-content'
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Formations en entreprise : accompagnement au changement, gestion du stress, communication interpersonnelle, développement du leadership. Aussi team building et animation d'ateliers."

export const metadata: Metadata = {
  title: 'Formations',
  description,
  alternates: { canonical: '/formations' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Formations', description, '/formations'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Formations', path: '/formations' },
    ]),
    serviceJsonLd(
      'Formations en entreprise',
      'Accompagnement au changement, gestion du stress, communication interpersonnelle, leadership, team building.',
      '/formations',
    ),
  ],
}

export default function FormationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FormationsContent />
    </>
  )
}
