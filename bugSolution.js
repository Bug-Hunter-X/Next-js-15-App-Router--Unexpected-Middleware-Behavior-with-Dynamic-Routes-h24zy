```javascript
// app/middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const url = req.nextUrl.clone();
  const pathname = req.nextUrl.pathname;

  // Check for specific conditions in the pathname
  if (pathname.startsWith('/dynamic')) {
    url.pathname = '/new-route'; // Redirect to a different route
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: '/dynamic/:id',
}
```
```javascript
// app/page.js
export default function Page(){
    return <div>New Route</div>
}
```