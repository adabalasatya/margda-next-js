import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('authToken')?.value
  
  // If user tries to access dashboard without token, redirect to login
  if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
  
  // If user is logged in but tries to access auth pages, redirect to dashboard
  if (['/signin', '/signup'].includes(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  
  return NextResponse.next()
}