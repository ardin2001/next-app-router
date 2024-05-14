import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const urlAdmin = ["/products"];
const urlAuth = ["/auth/login", "/auth/register"];
const urlFree = ["/auth/login","/auth/register","/setting"];
export default function withAuth(middleware: NextMiddleware) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    if(urlFree.includes(req.nextUrl.pathname)){
        console.log("masuk url free")
        return middleware(req, next);
    }
    console.log("lanjutt.....")

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
    return middleware(req, next);
  };
}
