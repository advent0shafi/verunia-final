import VeruniaFooter from "@/components/footer/footer";
import ProductCategoryGridLayout from "@/components/furniture-page/product-category/product-category-grid-layout";
import ProductCategorySections from "@/components/furniture-page/product-category/product-catogery-sections";
import Header from "@/components/header/header";

export default function ProductCategoryPage() {
    return (
       <main>  
                   <Header />
          
            <ProductCategorySections /> 
            <ProductCategoryGridLayout />
            <VeruniaFooter />          
            </main>
    );
}