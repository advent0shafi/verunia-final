import ProductCard from "./product-card";


// Product interface is now using the global Product type defined in types.d.ts


export default function ProductCategoryGrid({ products }: { products: Product[] }) {
  console.log(products);
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