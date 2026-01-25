import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ContactPage from "@/components/contact-page/contact-page";
import { frontendPoint } from "@/lib/getData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
    keywords: ['Furniture', 'Verunia Furniture Trading LLC'],
    openGraph: {
        title: 'Contact Verunia',
        description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
        images: [{ url: `${frontendPoint}/opengraph-image.png` }],
    },
} 

export default function ContactPageRoute() {
    return (
        <main>
            <Header />
            <ContactPage />
            <Footer />
        </main>
    )
}