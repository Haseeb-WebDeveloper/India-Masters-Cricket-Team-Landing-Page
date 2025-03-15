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
  description: "The India Masters Team is Led by the 'CRICKETING GOD' Sachin Tendulkar, whose captaincy promises a masterful blend of timeless technique and explosive T20 flair along with explosive batting of Yuvraj Singh, alongside the versatile Irfan Pathan, a true all-rounder.  The formidable batting line-up is further strengthened by the powerful Yusuf Pathan, while Ambati Rayudu provides strategic depth and explosive stroke play. Relive the glory days as these cricketing legends grace the field once more, donning the iconic blue Indian jersey.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: '/logo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India Masters | Official Website - International Masters League',
    description: 'The India Masters Team is Led by the \'CRICKETING GOD\' Sachin Tendulkar, whose captaincy promises a masterful blend of timeless technique and explosive T20 flair along with explosive batting of Yuvraj Singh, alongside the versatile Irfan Pathan, a true all-rounder.  The formidable batting line-up is further strengthened by the powerful Yusuf Pathan, while Ambati Rayudu provides strategic depth and explosive stroke play. Relive the glory days as these cricketing legends grace the field once more, donning the iconic blue Indian jersey.',
    images: ['/og-image.png'],
  },
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
            <main className="relative">{children}</main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
