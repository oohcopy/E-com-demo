// components/SortOptions.tsx
"use client"; // This component needs client-side interaction

import { SortOption } from "@/types";
import styles from "@/styles/SortOptions.module.css";

interface SortOptionsProps {
  currentSort: SortOption;
  onSortChange: (sortOption: SortOption) => void;
}

export default function SortOptions({
  currentSort,
  onSortChange,
}: SortOptionsProps) {
  return (
    <div className={styles.sortOptions}>
      <label htmlFor="sort-select">Sort by:</label>
      <select
        id="sort-select"
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className={styles.select}
      >
        <option value="default">Default</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
    </div>
  );
}
