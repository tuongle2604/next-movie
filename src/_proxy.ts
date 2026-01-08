// import { NextResponse } from "next/server";
// import { defaultLocale } from "@/lib/regions";
// import type { NextRequest } from "next/server";
// import { isLinkHasLocale } from "./lib/utils";

// export function proxy(request: NextRequest) {
//   // Check if there is any supported locale in the pathname
//   const { pathname } = request.nextUrl;

//   if (isLinkHasLocale(pathname)) return;

//   // Redirect if there is no locale
//   request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return NextResponse.rewrite(request.nextUrl);
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/((?!_next).*)",
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };
