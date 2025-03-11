import createMiddleware from "next-intl/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// إعدادات التعدد اللغوي
const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

// حماية لوحة التحكم باستخدام next-auth
const authMiddleware = withAuth(
  function middleware(req: NextRequest) {
    // حماية لوحة التحكم
    // if (
    //   req.nextUrl.pathname.startsWith("/dashboard") &&
    //   req.nextauth?.token?.role !== "admin"
    // ) {
    //   return NextResponse.rewrite(new URL("/", req.url));
    // }

    // تمرير الطلب لباقي الصفحات غير لوحة التحكم
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // السماح بالدخول فقط إذا كان هناك توكن
    },
  }
);
// الجمع بين التعدد اللغوي والحماية الخاصة بلوحة التحكم
export default function combinedMiddleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return authMiddleware(req);
  }
  return intlMiddleware(req);
}

// تحديد المسارات التي يتم تطبيق `middleware` عليها
export const config = {
  matcher: ["/", "/login", "/(ar|en)/:path*", "/dashboard/:path*"],
};
