import { notFound } from "next/navigation";
import FotivoProjectDetail from "@/components/ai-fotivo-page/fotivo-project-detail";
import Footer from "@/components/footer/footer";
import AiFotivaHeader from "@/components/header/ai-fotiva-header";
import { getAiFotivoProductBySlug, getRelatedAiFotivoProducts } from "@/lib/aiFotivo";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function FotivoProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const productRes = await getAiFotivoProductBySlug(slug);
    const product = productRes.data?.[0];

    if (!product) {
        notFound();
    }

    const relatedResponse = await getRelatedAiFotivoProducts(
        product.al_fotivo_category.slug,
        product.id
    );

    const relatedProducts = relatedResponse.data?.filter(
        (rp: any) => rp.id !== product.id
    ).slice(0, 3) || [];


    return (
        <main>
            <AiFotivaHeader />
            <FotivoProjectDetail
                product={product}
                relatedProducts={relatedProducts}
            />
            <Footer />
        </main>
    );
}