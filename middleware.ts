import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Redirect non-www to www with 301 permanent redirect
  if (hostname === 'jindabyneelectrician.com.au') {
    url.host = 'www.jindabyneelectrician.com.au'
    return NextResponse.redirect(url, 301)
  }

  // Redirect HTTP to HTTPS (handled by Vercel, but belt and suspenders)
  if (request.headers.get('x-forwarded-proto') === 'http') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  // Match all paths except static files and api routes that don't need redirects
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}
