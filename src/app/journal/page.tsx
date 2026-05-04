import type { Metadata } from 'next'

import { blogSettings, getPublishedPosts } from '@/lib/data/blog'
import { siteConfig } from '@/lib/seo'
import BlogPageContent from './blog-page-content'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const title = blogSettings.title || 'Blog'
  const description =
    blogSettings.description || 'Découvrez nos articles, conseils et actualités.'

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${siteConfig.url}/journal`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: blogSettings.heroImage ? [{ url: blogSettings.heroImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: blogSettings.heroImage ? [blogSettings.heroImage] : [],
    },
    alternates: {
      canonical: '/journal',
    },
  }
}

export default function BlogPage() {
  const posts = getPublishedPosts()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: blogSettings.title,
    description: blogSettings.description,
    url: `${siteConfig.url}/journal`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteConfig.url}/journal/${post.slug}`,
        name: post.title,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPageContent />
    </>
  )
}
