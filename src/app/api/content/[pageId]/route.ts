import { NextResponse } from 'next/server'

type Params = Promise<{ pageId: string }>

export async function GET(_request: Request, { params }: { params: Params }) {
  const { pageId } = await params
  return NextResponse.json({ pageId, content: {} })
}
