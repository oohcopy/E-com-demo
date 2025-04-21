// components/ProductList.tsx
"use client"; // This component manages state and interactions

import { useState, useMemo } from "react";
import { Product, SortOption } from "@/types";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import SortOptions from "./SortOptions";
import styles from "@/styles/ProductList.module.css";

interface ProductListProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ProductList({
  initialProducts,
  categories,
}: ProductListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...initialProducts];

    // Apply Filtering
    if (selectedCategory !== "all") {
      products = products.filter((p) => p.category === selectedCategory);
    }

    // Apply Sorting
    switch (sortOption) {
      case "name-asc":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "default":
      default:
        // No specific sort or maintain original (or sort by ID if needed)
        products.sort((a, b) => parseInt(a.id) - parseInt(b.id)); // Example default sort by ID
        break;
    }

    return products;
  }, [initialProducts, selectedCategory, sortOption]);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <SortOptions currentSort={sortOption} onSortChange={setSortOption} />
      </div>

      {filteredAndSortedProducts.length > 0 ? (
        <div className={styles.grid}>
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>
          No products found matching your criteria.
        </p>
      )}
    </div>
  );
}
