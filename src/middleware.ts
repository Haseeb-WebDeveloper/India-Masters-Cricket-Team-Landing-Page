import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  const username = process.env.ADMIN_USERNAME
  const password = process.env.ADMIN_PASSWORD

  // Basic Auth format: "Basic base64(username:password)"
  const expectedAuth = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`

  // Check if authorization is correct
  if (authHeader !== expectedAuth) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' },
    })
  }

  return NextResponse.next()
}

// Match specific routes that require auth
export const config = {
  matcher: ['/admin/:path*'], // Protect only the /admin route
}
