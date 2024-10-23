import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// 1. Specify protected and public routes
const publicRoutes = ["/login", "/signup", "/"];

export default async function middleware(req: NextRequest) {
  console.log("Middleware running for path", req.nextUrl.pathname);
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get("user-session")?.value;
  // const session = await decrypt(cookie);

  // 4. Redirect to /login if the user is not authenticated
  if ((!isPublicRoute || req.nextUrl.pathname === "/") && !cookie) {
    console.log("User is not authenticated");
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
