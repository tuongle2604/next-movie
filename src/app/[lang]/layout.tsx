import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SideBar from "@/components/sidebar";
import HolyLoader from "holy-loader";
import { ThemeProvider } from "@/components/theme-provider";
import { home } from "@/data/metadata";
import Logo from "./opengraph-image.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:8080/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  title: {
    default: home.title,
    template: `%s - ${home.title}`,
  },
  description: home.description,
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html suppressHydrationWarning>
      <body className={inter.className} id="#__next">
        <HolyLoader />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header>
            <SideBar lang={lang} />
          </Header>
          <main className="mt-14">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
