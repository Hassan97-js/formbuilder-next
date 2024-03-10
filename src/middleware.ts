export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/builder/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|auth/sign-in|auth/sign-up).*)"
  ]
};
