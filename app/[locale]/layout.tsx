import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import AuthProvider from "@/utilit/AuthProvider/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import bg from "@/public/bg.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeniTech",
  description:
    "جيني تك هي شريكك التقني الموثوق في تطوير المواقع، تطبيقات الجوال، وبرامج سطح المكتب، مع خدمات تصميم شاملة، مع الابتكار بعبقرية والتنفيذ باحترافية لتقديم حلول شاملة.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  const getDirection = (locale: string) => {
    const rtlLocals = ["ar"];
    return rtlLocals.includes(locale) ? "rtl" : "ltr";
  };
  const dataDir = getDirection(locale);

  return (
    <html lang={locale} dir={dataDir} suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J5EGX66XJB"
        ></Script>
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J5EGX66XJB');
  `}
        </Script>
      </head>
      <body
        className={` ${inter.className} bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <AuthProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
