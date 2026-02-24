import FotivoProjectCard from "./fotivo-project-card";

type Product = {
  id: number;
  name: string;
  slug: string;
  main_image?: {
    url: string;
  };
  al_fotivo_category: {
    name: string;
  };
};

export default function FotivoCategoryGrid({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <FotivoProjectCard
          key={product.id}
          title={product.name}
          category={product.al_fotivo_category.name}
          slug={product.slug}
          imageUrl={
            product.main_image?.url
              ? `https://api.veruniagroup.com${product.main_image.url}`
              : "/placeholder.png"
          }
        />
      ))}
    </div>
  );
}