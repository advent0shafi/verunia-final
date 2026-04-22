import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { frontendPoint } from "@/lib/getData";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import LazyLoadSection from "@/components/ui/lazy-load-section";

const ContactPage = dynamic(() => import("@/components/contact-page/contact-page"), {
  loading: () => <PageSectionFallback minHeightClass="min-h-[720px]" />,
});

function PageSectionFallback({ minHeightClass }: { minHeightClass: string }) {
  return (
    <div
      aria-hidden
      className={`w-full animate-pulse rounded-md bg-[#F7EFE2] ${minHeightClass}`}
    />
  );
}

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
            <LazyLoadSection minHeightClass="min-h-[720px]">
                <ContactPage />
            </LazyLoadSection>
            <Footer />
        </main>
    )
}