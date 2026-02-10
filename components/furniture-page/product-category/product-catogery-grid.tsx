import ProductCard from "./product-card";


interface Product {
  id: string;
  category: string;
  name: string;
  image: string;
  slug: string;
  colors: string[];

}
const products: Product[] = [
  {
    id: "1",
    category: "Office Chair",
    name: "High Back Chair CK-858A",
    image: "/furniture-page/products/chair-1.png",
    slug: "high-back-chair-ck-858a",
    colors: ["#ffffff", "#6b7280", "#78716c", "#f59e0b"],

  },
  {
    id: "2",
    category: "Office Chair",
    name: "High Back Chair CK-858A",
    image: "/furniture-page/products/black-chair.png",
    slug: "high-back-chair-ck-858a",
    colors: ["#ffffff", "#6b7280", "#22c55e"],
  },
  {
    id: "3",
    category: "Desks",
    name: "TY-B0124",
    image: "/furniture-page/products/product-2.png",
    slug: "ty-b0124",
    colors: ["#ffffff", "#6b7280"],
  },
  {
    id: "4",
    category: "Sofa",
    name: "H-5252",
    image: "/furniture-page/products/product-1.png",
    slug: "h-5252",
    colors: ["#ffffff", "#6b7280", "#78716c", "#f59e0b"],
  },
  {
    id: "5",
    category: "Office Chair",
    name: "High Back Chair CK-900",
    image: "/furniture-page/products/black-chair.png",
    slug: "high-back-chair-ck-900",
    colors: ["#1f2937", "#22c55e", "#78716c", "#f59e0b"],
  },
];

export default function ProductCategoryGrid() {
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map(p => (
    <ProductCard key={p.id} product={p} />
  ))}
</div>

      </div>
    );
}