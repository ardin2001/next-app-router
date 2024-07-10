import withAuth from "./app/middlewares/withAuth";
import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const urlAdmin = ["/products"];
const urlAuth = ["/auth/login", "/auth/register"];

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    const url = new URL("/auth/login", req.url);
    url.searchParams.set("callbackUrl", encodeURI(req.url));
    return NextResponse.redirect(url);
  }

  if (token) {
    if (urlAuth.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (token.role !== "admin" && urlAdmin.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*",'/setting/profile'],
};
