// ==========================
// Common / Utility Types
// ==========================

type StrapiImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

type StrapiImageFormats = {
  large?: StrapiImageFormat;
  medium?: StrapiImageFormat;
  small?: StrapiImageFormat;
  thumbnail?: StrapiImageFormat;
};

type StrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: StrapiImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type StrapiPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// ==========================
// Project Item (Interior / Hotel)
// ==========================

type InteriorItem = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  slug: string;
  project_title: string;
  client_name: string;
  project_type: string;
  location: string;
  completion_date: string;

  project_thumbnail_image: StrapiImage | null;
  gallery_images: StrapiImage[];
};

// ==========================
// API Response
// ==========================

type InteriorsApiResponse = {
  data: InteriorItem[];
  meta: {
    pagination: StrapiPagination;
  };
};



// ==============================
// Interior Project
// ==============================
type InteriorProject = {
  id: number;
  slug: string;
  project_title: string;
  client_name: string;
  project_type: string;
  location: string;
  completion_date: string;
  project_thumbnail_image: StrapiImage;
  gallery_images: StrapiImage[];
};

// ==============================
// API Response
// ==============================
type StrapiResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};


// =========================
// SEO
// =========================
type Seo = {
  id: number
  metaTitle: string
  metaDescription: string
}

// =========================
// Product (light version)
// =========================

type ProductSummary = {
  id: number
  name: string
  slug: string
  cardLabel: string
  description: string
  product_info_url: string | null
}

// =========================
// Category
// =========================

type Category = {
  id: number
  name: string
  slug: string
  headerDescription: string
  headerImage: StrapiImage
  seo: Seo[]
  product?: ProductSummary
}

// =========================
// API Response Wrapper
// =========================

type ApiCategoryResponse<T> = {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

type CategoryNavItem = {
  id: number
  name: string
  slug: string
}

// =========================
// Category (embedded in product)
// =========================

type ProductCategory = {
  id: number
  name: string
  slug: string
  headerDescription: string
}

// =========================
// Product Variant
// =========================

type ProductVariant = {
  id: number
  name: string
  color_code: string
}

// =========================
// Product
// =========================

type ProductMedia = StrapiImage;

type Product = {
  id: number
  name: string
  slug: string
  cardLabel: string
  description: string
  isfeatured: boolean
  isBestSeller: boolean
  product_info_url: string | null
  category: ProductCategory
  main_image: ProductMedia
  images: ProductMedia[]
  product_variant: ProductVariant[]
}

// =========================
// API Wrapper
// =========================

type ProductApiResponse = {
  data: Product[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

type Category = {
  id: number
  name: string
  slug: string
  headerDescription: string
  headerImage?: Media
}