// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// import createMiddleware from "next-intl/middleware";

// // إعدادات التعدد اللغوي
// const intlMiddleware = createMiddleware({
//   locales: ["en", "ar"],
//   defaultLocale: "en",
// });

// export async function middleware(req) {
//   const token = await getToken({ req });
//   console.log("token from middleware:", token);
//   // إذا كان المستخدم يحاول الوصول إلى لوحة التحكم وليس لديه صلاحية الأدمن، يتم توجيهه إلى الصفحة الرئيسية
//   if (req.nextUrl.pathname.startsWith("/(ar|en)/dashboard") && token === null) {
//     return NextResponse.redirect(new URL("/", req.url));
//     // return intlMiddleware(req);
//   }

//   // تمرير الطلب لباقي الصفحات
//   return intlMiddleware(req);
// }

// export const config = {
//   matcher: [
//     "/",
//     "/login",
//     "/dashboard",
//     "/(ar|en)/dashboard",
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
  // جلب التوكن من الجلسة
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // console.log("Token from middleware:", token);

  const isDashboardRoute = req.nextUrl.pathname.match(/^\/(ar|en)?\/dashboard/);

  // التأكد من أن المستخدم له دور أدمن قبل السماح له بالدخول للوحة التحكم
  if (isDashboardRoute && (!token || token.role !== "admin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // تمرير الطلب إلى `intlMiddleware` للتعامل مع اللغات
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard",
    "/(ar|en)/dashboard",
    "/(ar|en)/:path*",
    "/dashboard/:path*",
    "/en/dashboard/:path*",
    "/ar/dashboard/:path*",
  ],
};
