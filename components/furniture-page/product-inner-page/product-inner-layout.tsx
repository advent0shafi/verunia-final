import Header from "@/components/header/header";
import ProductCategoryInnerPage from "./product-detail";
import VeruniaFooter from "@/components/footer/footer";


export default function     ProductCategoryInnerLayout() {
    return (
        <div>
           
            <ProductCategoryInnerPage />
            <VeruniaFooter />
        </div>
    );
}