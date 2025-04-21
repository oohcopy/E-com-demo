// app/products/[productId]/page.tsx
import { fetchProductById, fetchProducts } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation"; // Import notFound
import styles from "@/styles/ProductDetail.module.css";

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

// Optional: Generate static paths at build time for better performance
// export async function generateStaticParams() {
//   const products = await fetchProducts(); // Fetch all products
//   return products.map((product) => ({
//     productId: product.id,
//   }));
// }

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const product = await fetchProductById(params.productId);

  if (!product) {
    notFound(); // Trigger the 404 page if product not found
  }

  return (
    <div className={styles.container}>
      <Link href="/products" className={styles.backLink}>
        ← Back to Products
      </Link>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }} // Use 'contain' for detail view
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={styles.details}>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <p className={styles.description}>{product.description}</p>
          {/* Add more details or an "Add to Cart" button here */}
          <button className={styles.addToCartButton}>
            Add to Cart (Example)
          </button>
        </div>
      </div>
    </div>
  );
}

// Optional: Generate metadata dynamically
export async function generateMetadata({ params }: ProductDetailPageProps) {
  const product = await fetchProductById(params.productId);
  return {
    title: product ? `${product.name} | Product Catalog` : "Product Not Found",
    description: product?.description ?? "Details for the selected product.",
  };
}
