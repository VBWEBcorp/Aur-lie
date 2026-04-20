import { NextResponse } from 'next/server'

import { getActiveImages } from '@/lib/data/gallery'

export async function GET() {
  return NextResponse.json(getActiveImages())
}
