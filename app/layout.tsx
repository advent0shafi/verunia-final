import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LoadingUIWrapper from "@/components/ui/loading-ui-wrapper";
import SmoothScroll from "@/components/smooth-scroll";
import { frontendPoint } from "@/lib/getData";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
})
const helvetica = localFont({
  src: [
    { path: "../public/font/helvetica/Helvetica.ttf", weight: "400", style: "normal" },
    { path: "../public/font/helvetica/Helvetica-Oblique.ttf", weight: "400", style: "italic" },
    { path: "../public/font/helvetica/Helvetica-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/font/helvetica/Helvetica-BoldOblique.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-helvetica",
  display: "swap",
})




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
        className={`${instrumentSans.variable} ${helvetica.variable} antialiased`}
      >
        <LoadingUIWrapper>  <SmoothScroll> {children} </SmoothScroll> </LoadingUIWrapper>
      </body>
    </html>
  );
}
