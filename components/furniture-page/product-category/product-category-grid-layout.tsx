import ProductCategoryGrid from "./product-catogery-grid";
import SidebarFilter from "./sidebar-filter";

export default function ProductCategoryGridLayout() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">


                <div className="flex gap-16">
                    <SidebarFilter />
                    <section className="flex-1">
                        <ProductCategoryGrid />
                    </section>
                </div>
            </div>
        </section>
    );
}