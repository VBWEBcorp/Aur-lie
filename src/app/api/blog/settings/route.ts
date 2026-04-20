import { NextResponse } from 'next/server'

import { blogSettings } from '@/lib/data/blog'

export async function GET() {
  return NextResponse.json(blogSettings)
}
