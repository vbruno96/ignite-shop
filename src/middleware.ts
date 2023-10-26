import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('session_id')
  if (!sessionId) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: '/success',
}
