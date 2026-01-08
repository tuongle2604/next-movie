import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SideBar from "@/components/sidebar";
import HolyLoader from "holy-loader";
import { ThemeProvider } from "@/components/theme-provider";
import { home } from "@/data/metadata";
// import Logo from "./opengraph-image.png";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-movie.tuongle.dev/"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
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
    <html suppressHydrationWarning lang={lang}>
      <body className={inter.className} id="#__next">
        <HolyLoader />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header>
            <SideBar lang={lang} />
          </Header>
          <main className="mt-14">{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
