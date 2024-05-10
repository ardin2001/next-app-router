import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { NextFetchEvent,  } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware_documentation(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('test1', 'test')
 
  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
 
  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}

export function middleware1(request: NextRequest) {
  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next()
 
  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-test', 'hello world')
  return response
}

export function middleware(req: NextRequest, event: NextFetchEvent) {
  event.waitUntil(
    fetch(`${process.env.HOSTNAME}/api/products`, {
      method: 'GET',
    }).then((res) => console.log('response :',res)),
  )
 
  return NextResponse.next()
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/products"],
};
