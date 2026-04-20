import { NextResponse } from 'next/server'

import { getPublishedPosts } from '@/lib/data/blog'

export async function GET() {
  return NextResponse.json(getPublishedPosts())
}
