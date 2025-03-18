// import createMiddleware from "next-intl/middleware";
// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";
// // import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// // إعدادات التعدد اللغوي
// const intlMiddleware = createMiddleware({
//   locales: ["en", "ar"],
//   defaultLocale: "en",
// });

// // حماية لوحة التحكم باستخدام next-auth
// const authMiddleware = withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req });

//     // حماية لوحة التحكم
//     if (
//       req.nextUrl.pathname.startsWith("/dashboard") &&
//       token?.role !== "admin"
//     ) {
//       return NextResponse.rewrite(new URL("/", req.url));
//     }

//     // تمرير الطلب لباقي الصفحات غير لوحة التحكم
//     return intlMiddleware(req);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token, // السماح بالدخول فقط إذا كان هناك توكن
//     },
//   }
// );

// // الجمع بين التعدد اللغوي والحماية الخاصة بلوحة التحكم
// export default function combinedMiddleware(req) {
//   if (
//     req.nextUrl.pathname.startsWith("/dashboard") ||
//     req.nextUrl.pathname.startsWith("/en/dashboard") ||
//     req.nextUrl.pathname.startsWith("/ar/dashboard")
//   ) {
//     // تمرير الطلب إلى authMiddleware
//     return authMiddleware(req);
//   }
//   return intlMiddleware(req);
// }

// // تحديد المسارات التي يتم تطبيق `middleware` عليها
// export const config = {
//   matcher: [
//     "/",
//     "/(ar|en)/:path*",
//     "/dashboard/:path*",
//     "/en/dashboard/:path*",
//     "/ar/dashboard/:path*",
//   ],
// };

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";

// إعدادات التعدد اللغوي
const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

export async function middleware(req) {
  const token = await getToken({ req });

  // إذا كان المستخدم يحاول الوصول إلى لوحة التحكم وليس لديه صلاحية الأدمن، يتم توجيهه إلى الصفحة الرئيسية
  if (req.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/", req.url));
    // return intlMiddleware(req);
  }

  // تمرير الطلب لباقي الصفحات
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/(ar|en)/:path*",
    "/dashboard",
    "/dashboard/:path*",
    "/en/dashboard/:path*",
    "/ar/dashboard/:path*",
  ],
};
