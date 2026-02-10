import ProductCategoryGrid from "./product-catogery-grid";
import SidebarFilter from "./sidebar-filter";

export default function ProductCategoryGridLayout() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

        {/* Layout wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-[260px]">
            <SidebarFilter />
          </aside>

          {/* Product Grid */}
          <section className="flex-1">
            <ProductCategoryGrid />
          </section>

        </div>
      </div>
    </section>
  );
}
