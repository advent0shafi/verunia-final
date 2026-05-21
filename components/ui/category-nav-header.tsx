import FurnitureCatalogNav from "@/components/furniture-page/furniture-catalog-nav";
import type { FurnitureNavCategory } from "@/lib/furniture";

interface NavProps {
  categories: FurnitureNavCategory[];
}

export default function CategoryNavHeader({ categories }: NavProps) {
  return <FurnitureCatalogNav categories={categories} />;
}
