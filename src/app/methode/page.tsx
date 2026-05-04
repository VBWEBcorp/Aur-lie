import type { Metadata } from 'next'

import { MethodeContent } from './methode-content'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Ma méthode : coaching certifié, neurosciences appliquées et outils de régulation émotionnelle. Pour des changements qui tiennent dans la durée."

export const metadata: Metadata = {
  title: 'Méthode',
  description,
  alternates: { canonical: '/methode' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Méthode', description, '/methode'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Méthode', path: '/methode' },
    ]),
  ],
}

export default function MethodePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MethodeContent />
    </>
  )
}
