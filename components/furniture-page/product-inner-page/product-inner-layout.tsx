import ProductCategoryInnerPage from "./product-detail";
import VeruniaFooter from "@/components/footer/footer";

export default function ProductCategoryInnerLayout({ product }: { product: Product }) {
    return (
        <div>
            <ProductCategoryInnerPage product={product} />
            <VeruniaFooter />
        </div>
    );
}