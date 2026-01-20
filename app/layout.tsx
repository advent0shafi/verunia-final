import type { Metadata } from "next";
import { Instrument_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import LoadingUIWrapper from "@/components/ui/loading-ui-wrapper";



const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
})
const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-fraunces" })


export const metadata: Metadata = {
  title: "Verunia",
  description: "Interior design studio",
};

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
        <LoadingUIWrapper>  {children} </LoadingUIWrapper>
      </body>
    </html>
  );
}
