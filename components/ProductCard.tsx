// components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import styles from "@/styles/ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill // Use fill for responsive images within a sized container
          style={{ objectFit: "cover" }} // or 'contain'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.category}>{product.category}</p>
      </div>
    </Link>
  );
}
