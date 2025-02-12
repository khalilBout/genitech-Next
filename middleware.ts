// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "ar"],

//   // Used when no locale matches
//   defaultLocale: "en",
// });

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/serves", "/contact", "/(ar|en)/:path*"],
// };
import createMiddleware from "next-intl/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// إعدادات التعدد اللغوي
const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

// حماية لوحة التحكم باستخدام next-auth
const authMiddleware = withAuth(
  function middleware(req) {
    // حماية لوحة التحكم
    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      req.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/", req.url));
    }

    // تمرير الطلب لباقي الصفحات غير لوحة التحكم
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // السماح بالدخول فقط إذا كان هناك توكن
    },
  }
);

export default function combinedMiddleware(req) {
  // إذا كانت المسارات تخص لوحة التحكم، طبق الحماية
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return authMiddleware(req);
  }

  // لباقي المسارات، طبق إعدادات التعدد اللغوي
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/serves",
    "/contact",
    "/(ar|en)/:path*",
    "/dashboard/:path*",
  ],
};
