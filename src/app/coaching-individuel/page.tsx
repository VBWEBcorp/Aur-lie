import type { Metadata } from 'next'

import { CoachingIndividuelContent } from './coaching-individuel-content'
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Coaching individuel pour dirigeants : 6 mois pour identifier ce qui te retient vraiment et aller chercher le niveau d'après. Coaching, neurosciences, régulation émotionnelle."

export const metadata: Metadata = {
  title: 'Coaching individuel',
  description,
  alternates: { canonical: '/coaching-individuel' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Coaching individuel', description, '/coaching-individuel'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Coaching', path: '/coaching' },
      { name: 'Coaching individuel', path: '/coaching-individuel' },
    ]),
    serviceJsonLd(
      'Coaching individuel de dirigeants',
      "Programme de 6 mois pour dirigeants TPE/PME. Coaching, neurosciences, régulation émotionnelle.",
      '/coaching-individuel',
    ),
  ],
}

export default function CoachingIndividuelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoachingIndividuelContent />
    </>
  )
}
