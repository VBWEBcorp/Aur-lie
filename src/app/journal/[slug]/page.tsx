import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPostBySlug, getPublishedPosts } from '@/lib/data/blog'
import { siteConfig } from '@/lib/seo'
import BlogPostContent from './blog-post-content'

type Params = Promise<{ slug: string }>

export const revalidate = 3600

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const title = post.metaTitle || post.title
  const description = (post.metaDescription || post.excerpt || '').substring(0, 160)
  const url = `${siteConfig.url}/journal/${post.slug}`

  return {
    title,
    description,
    authors: post.author ? [{ name: post.author }] : [],
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: post.coverImage
        ? [{ url: post.coverImage, width: 1200, height: 630, alt: title }]
        : [],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.author ? [post.author] : [],
      tags: post.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.coverImage ? [post.coverImage] : [],
    },
    alternates: {
      canonical: `/journal/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: post.coverImage || undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: post.author ? { '@type': 'Person', name: post.author } : undefined,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/journal/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent slug={slug} />
    </>
  )
}
