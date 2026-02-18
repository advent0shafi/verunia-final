// ==========================
// Common / Utility Types
// ==========================

type StrapiImage = {
  id: number;
  documentId: string;
  url: string;
};

type StrapiPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// ==========================
// Interior Component
// ==========================

type InteriorComponent = {
  id: number;
  project_title: string;
  client_name: string;
  project_type: string;
  project_thumbnail_image: StrapiImage | null;
  gallery_images: StrapiImage[];
  completion_date: string;
  location: string;
};

// ==========================
// Interior Collection Item
// ==========================

type InteriorItem = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Interior: InteriorComponent;
};

// ==========================
// Interior API Response
// ==========================

type InteriorsApiResponse = {
  data: InteriorItem[];
  meta: {
    pagination: StrapiPagination;
  };
};
