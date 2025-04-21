// components/Filters.tsx
"use client"; // This component needs client-side interaction

import styles from "@/styles/Filters.module.css";

interface FiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Filters({
  categories,
  selectedCategory,
  onCategoryChange,
}: FiltersProps) {
  return (
    <div className={styles.filters}>
      <label htmlFor="category-select">Filter by Category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className={styles.select}
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {/* Add more filters here (e.g., price range slider) */}
    </div>
  );
}
