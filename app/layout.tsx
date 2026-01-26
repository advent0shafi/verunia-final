import type { Metadata } from "next";
import { Instrument_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import LoadingUIWrapper from "@/components/ui/loading-ui-wrapper";
import SmoothScroll from "@/components/smooth-scroll";
import { frontendPoint } from "@/lib/getData";


const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
})
const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-fraunces" })




export const metadata: Metadata = {
  metadataBase: new URL(frontendPoint),

  title: {
    default: "Verunia",
    template: "%s - Verunia",
  },
  description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
  keywords: ['Verunia', 'Verunia Furniture Trading LLC', 'Verunia Furniture', 'Verunia Interiors', 'Verunia AI', 'Verunia Furniture Trading LLC'],
  authors: [{ name: 'Verunia' }],
  creator: 'Verunia',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${fraunces.variable} antialiased`}
      >
        <LoadingUIWrapper>  <SmoothScroll> {children} </SmoothScroll> </LoadingUIWrapper>
      </body>
    </html>
  );
}
