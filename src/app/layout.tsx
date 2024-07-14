"use client";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import "@/app/styles/variables.module.scss";
import { Header } from "./ui/homepage/header/Header";
import en from "@/app/i18n/en.json";
import React, { useState, useEffect } from "react";
import useLocaleStore from "./store/locale";
import { IntlProvider } from "react-intl";
import { usePathname } from "next/navigation";
import { generateTitle_util } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

const images = [
  "https://res.cloudinary.com/dn1lqngds/image/upload/v1718324057/sfytsqftf9pjulb2tb9v.jpg",
  "https://res.cloudinary.com/dn1lqngds/image/upload/v1718315157/uploads/csqulpf1ca2x5y17snvx.jpg",
  "https://res.cloudinary.com/dn1lqngds/image/upload/v1718315204/uploads/f5ynljqgxhus2ty9plbr.jpg",
  // add more image URLs here...
];

function loadLocaleData(locale: string) {
  console.log("Locale:: ", locale);
  switch (locale) {
    case "fr":
      return import("@/app/i18n/fr.json");
    case "es":
      return import("@/app/i18n/es.json");
    case "de":
      return import("@/app/i18n/de.json");
    default:
      return import("@/app/i18n/en.json");
  }
}

/**
 * Root layout component for the application.
 *
 * @param children - The child components to render within the layout.
 * @returns The rendered layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [messages, setMessages] = useState(en);
  const { locale } = useLocaleStore();
  const [currentImage, setCurrentImage] = useState(images[0]);
  const pathname = usePathname();

  useEffect(() => {
    /**
     * Changes the current image in a loop every 1 minute.
     */
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 60000);

    return () => clearInterval(timer); // clean up on component unmount
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await loadLocaleData(locale);
        //Setting the locale messages
        // @ts-ignore
        setMessages(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [locale]);


  return (
    <html lang="en">
      <IntlProvider messages={messages} locale={locale} defaultLocale="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="A Next.js application with internationalization (i18n) support."
          />
          <title>{`Toedur | ${generateTitle_util(pathname)}`}</title>
        </head>
        <body
          style={{
            backgroundImage: `url(${currentImage})`,
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
          className={inter.className}
        >

          <Header />
          <Toaster />
          {children}
        </body>
      </IntlProvider>
    </html>
  );
}
