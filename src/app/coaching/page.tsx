import type { Metadata } from 'next'

import { CoachingContent } from './coaching-content'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Trois manières de travailler ensemble : coaching individuel sur 6 mois, conférences pour dirigeants, cercles de dirigeants."

export const metadata: Metadata = {
  title: 'Coaching',
  description,
  alternates: { canonical: '/coaching' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Coaching', description, '/coaching'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Coaching', path: '/coaching' },
    ]),
  ],
}

export default function CoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoachingContent />
    </>
  )
}
