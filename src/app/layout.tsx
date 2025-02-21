import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Footer } from "@/components/layout/footer";
import localFont from 'next/font/local'


const customFont  = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMachina-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMachina-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMachina-Ultrabold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-custom'
})


export const metadata: Metadata = {
  title: "India Masters | Official Website - International Masters League",
  description: "India Masters is the official website for the International Masters League, a cricket tournament that features teams from around the world. The league is a celebration of the sport and a showcase of the best players from across the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${customFont.variable}`}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Header />
            <main className="relative">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
