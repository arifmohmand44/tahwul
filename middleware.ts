import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;


  // 👇 redirect to dashboard
  if (nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|img|.*\\.svg|public).*)",
  ],
};
