// app/products/page.tsx
import ProductList from "@/components/ProductList";
import { fetchProducts, getCategories } from "@/data/products"; // Assuming fetch is async

// Revalidate data periodically or on demand if data changes frequently
// export const revalidate = 3600; // Revalidate every hour

export default async function ProductsPage() {
  // Fetch initial data on the server
  const initialProducts = await fetchProducts();
  const categories = await getCategories();

  return (
    <div>
      <h2>Our Products</h2>
      {/* Pass server-fetched data to the client component */}
      <ProductList initialProducts={initialProducts} categories={categories} />
    </div>
  );
}
