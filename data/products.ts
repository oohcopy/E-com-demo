// data/products.ts
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    category: "Electronics",
    imageUrl: "/placeholder.png",
  },
  {
    id: "2",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse.",
    price: 25,
    category: "Accessories",
    imageUrl: "/placeholder.png",
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard for gaming.",
    price: 75,
    category: "Accessories",
    imageUrl: "/placeholder.png",
  },
  {
    id: "4",
    name: "4K Monitor",
    description: "27-inch 4K UHD monitor.",
    price: 300,
    category: "Electronics",
    imageUrl: "/placeholder.png",
  },
  {
    id: "5",
    name: "Smartphone X",
    description: "Latest generation smartphone.",
    price: 999,
    category: "Electronics",
    imageUrl: "/placeholder.png",
  },
  {
    id: "6",
    name: "Desk Chair",
    description: "Comfortable office chair.",
    price: 150,
    category: "Furniture",
    imageUrl: "/placeholder.png",
  },
  {
    id: "7",
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker.",
    price: 50,
    category: "Accessories",
    imageUrl: "/placeholder.png",
  },
  {
    id: "8",
    name: "Webcam HD",
    description: "1080p HD webcam for streaming.",
    price: 40,
    category: "Electronics",
    imageUrl: "/placeholder.png",
  },
];

// Helper function to simulate API call delay (optional)
export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate network delay
  // await new Promise(resolve => setTimeout(resolve, 500));
  return products;
};

export const fetchProductById = async (
  id: string
): Promise<Product | undefined> => {
  // Simulate network delay
  // await new Promise(resolve => setTimeout(resolve, 300));
  return products.find((p) => p.id === id);
};

export const getCategories = async (): Promise<string[]> => {
  const products = await fetchProducts();
  const categories = new Set(products.map((p) => p.category));
  return Array.from(categories);
};
