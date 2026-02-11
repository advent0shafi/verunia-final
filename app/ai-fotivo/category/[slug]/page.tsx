import { notFound } from "next/navigation";
import { getCategoryBySlug, getProjectsByCategory, aiFotivoCategories } from "@/data/ai-fotivo-data";
import FotivoCategoryGrid from "@/components/ai-fotivo-page/fotivo-category-grid";
import AiFotivaHeader from "@/components/header/ai-fotiva-header";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";
import { ImageReveal } from "@/components/home/animated-section";
import Image from "next/image";

interface CategoryPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return aiFotivoCategories.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        return {
            title: 'Category Not Found',
        };
    }

    return {
        title: `${category.title} - Al Fotivo`,
        description: category.description,
    };
}

export default async function FotivoCategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);
    const projects = getProjectsByCategory(slug);

    if (!category) {
        notFound();
    }

    return (
        <main className="bg-[#171412] min-h-screen text-[#FDFDFC]">
            <AiFotivaHeader />

            {/* Category Hero */}
            <section className="relative w-full h-[50vh] md:h-[60vh] " style={{
                // fallback for clients not supporting Image as background
                backgroundImage: "url('/ui/background.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
               
                <div className="absolute inset-0 " />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-[0] text-center text-white/90 max-w-2xl">
                  Collection
                </p>
                    <h1 className="font-fraunces font-light text-[48px] md:text-[64px] text-[#F5C547] mb-4">
                        {category.title}
                    </h1>
                   
                </div>
            </section>

            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1440px] mx-auto">
                   
                        <FotivoCategoryGrid  />
                    
                </div>
            </section>

            <Footer />
        </main>
    );
}
