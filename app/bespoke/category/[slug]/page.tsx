import Link from "next/link";
import { notFound } from "next/navigation";
import FotivoCategoryGrid from "@/components/ai-fotivo-page/fotivo-category-grid";
import AiFotivaHeader from "@/components/header/ai-fotiva-header";
import Footer from "@/components/footer/footer";
import { getAiFotivoProductsByCategorySlug } from "@/lib/aiFotivo";

interface CategoryPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function FotivoCategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;

    const response = await getAiFotivoProductsByCategorySlug(slug);
    const products = response.data;

    if (!products || products.length === 0) {
        notFound();
    }

    return (
        <main className="bg-[#171412] min-h-screen text-[#FDFDFC]">
            <AiFotivaHeader />

            <nav
              aria-label="Breadcrumb"
              className="max-w-[1440px] mx-auto px-4 md:px-8 pt-6 text-sm text-white/70"
            >
              <Link
                href="/bespoke"
                className="font-instrument underline decoration-white/25 underline-offset-4 hover:text-[#F5C547] hover:decoration-[#F5C547]/55 transition-colors"
              >
                Bespoke
              </Link>
              <span className="mx-2 text-white/40" aria-hidden>
                /
              </span>
              <span className="font-instrument text-white/90">
                {products[0].al_fotivo_category.name}
              </span>
            </nav>

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
                    <h1 className="font-helvetica font-light text-[48px] md:text-[64px] text-[#F5C547] mb-4">
                        {products[0].al_fotivo_category.name}
                    </h1>
                   
                </div>
            </section>
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1440px] mx-auto">
                    <FotivoCategoryGrid products={products} />
                </div>
            </section>

            <Footer />
        </main>
    );
}