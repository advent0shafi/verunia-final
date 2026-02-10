'use client'
import { notFound } from 'next/navigation';
import { use } from 'react'

import Footer from '@/components/footer/footer'; // Assuming existing footer
import ProductDetail from '@/components/furniture-page/product-inner-page/product-detail';
import RelatedProducts from '@/components/furniture-page/product-inner-page/related-products';
import Header from '@/components/header/header';

interface Product {
  name: string;
  category: string;
  image: string;
  thumbnails: string[];
  colors: string[];
  description: string;
}

interface RelatedProduct {
  id: string;
  category: string;
  name: string;
  image: string;
  colors: string[];
}

// Synchronous mock data function (replace with real sync logic or API in production)
function getProduct(slug: string): Product {
  const products: Record<string, Product> = {
    'high-back-chair-ck-858a': {
      name: 'High Back Chair CK-858A',
      category: 'Office Chair',
      image: '/furniture-page/products/black-chair.png',
      thumbnails: [
        '/furniture-page/products/product-3.png',
        '/furniture-page/products/product-3.png',
        '/furniture-page/products/product-3.png',
        '/furniture-page/products/product-3.png',
        
      ],
      colors: ['#000000', '#8B4513', '#D2691E'],
      description: 'Crafted from premium genuine leather for a luxurious, durable finish, this chair blends style and function. The high-grade aluminum frame keeps it sleek. Clean look with dynamic lumbar support adapts to both forward-leaning postures, ensuring comfort during long hours of work. Adjustable headrest and armrests complete the ergonomic design, promoting proper posture throughout the day.',
    },
    '3': { // Added example for numeric slug '3' to demonstrate
      name: 'High Back Chiar CK-858A',
      category: 'Office Chair',
      image: '/furniture-page/products/black-chair.png',    
      thumbnails: [
        '/furniture-page/products/product-3.png',
        '/furniture-page/products/product-3.png',
        '/furniture-page/products/product-3.png',
        '/furniture-page/products/product-3.png',
      ],
      colors: ['#F5F5F4','#000000','#8B4513', '#D2691E','#006400'],
      description: 'Crafted from premium genuine leather for a luxurious, durable finish, this chair blends style and function. The anti-fingerprint aluminum frame keeps a sleek, clean look with minimal maintenance. Features dynamic lumbar support adapts to both upright and forward-leaning postures, ensuring comfort during long hours of work. Adjustable headrest and armrests complete the ergonomic design, promoting proper posture throughout the day.',
    },
  };

  const product = products[slug];
  if (!product) {
    console.error(`Product not found for slug: ${slug}`);
    notFound();
  }
  return product;
}

// Synchronous mock for related products
function getRelatedProducts(): RelatedProduct[] {
  return [
    {
      id: '1',
      category: 'Office Chair',
      name: 'High Back Chair CK-858A',
      image: '/furniture-page/products/product-3.png',
      colors: ['#006400'],
    },
    {
      id: '2',
      category: 'Desks',
      name: 'TY-B0124',
      image: '/furniture-page/products/product-3.png',
      colors: ['#000000'],
    },
    {
      id: '3',
      category: 'Sofa',
      name: 'H-5252',
      image: '/furniture-page/products/product-3.png',
      colors: ['#000000', '#D2691E'],
    },
    {
      id: '4',
      category: 'Office Chair',
      name: 'High Back Chair CK-858A',
      image: '/furniture-page/products/product-3.png',
      colors: ['#000000', '#D2691E'],
    },
  ];
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params); // Direct destructuring, as params is always an object in sync pages

  if (!slug) {
    console.error('Slug is undefined');
    notFound();
  }

  try {
    const product = getProduct(slug);
    const related = getRelatedProducts();

    return (
      <main className="bg-white">
        {/* Header/nav assumed in layout.tsx */}
        <Header/>
        <ProductDetail product={product} />
        <RelatedProducts products={related} />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error in ProductPage:', error);
    notFound();
  }
}