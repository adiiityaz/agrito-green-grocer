export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  discount?: number;
  isFeatured?: boolean;
  isNew?: boolean;
}

export const categories = [
  { id: "all", name: "All Products", icon: "🌱" },
  { id: "seeds", name: "Seeds", icon: "🌱" },
  { id: "fertilizers", name: "Fertilizers", icon: "🌿" },
  { id: "tools", name: "Tools", icon: "🔧" },
  { id: "organic", name: "Organic", icon: "🍀" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Wheat Seeds - 5kg Bag",
    price: 999,
    image: "https://m.media-amazon.com/images/I/81n+K8tOjBL._AC_SL1500_.jpg",
    category: "seeds",
    description: "Premium quality organic wheat seeds for high yield farming. Disease resistant variety with excellent germination rate.",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Hybrid Tomato Seeds - 100g Pack",
    price: 649,
    image: "https://m.media-amazon.com/images/I/71c8ThQvX-L._AC_SL1500_.jpg",
    category: "seeds",
    description: "High yielding hybrid tomato seeds with superior taste and disease resistance. Perfect for greenhouse and field cultivation.",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    isNew: true,
  },
  {
    id: "3",
    name: "Premium Basmati Rice - 10kg",
    price: 1899,
    originalPrice: 2199,
    discount: 14,
    image: "https://m.media-amazon.com/images/I/91rU5w8frhL._AC_SL1500_.jpg",
    category: "organic",
    description: "Authentic premium basmati rice with long grains and aromatic fragrance. Aged for perfect taste and texture.",
    rating: 4.7,
    reviews: 256,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "4",
    name: "Neem Fertilizer Cake - 2kg",
    price: 750,
    image: "https://m.media-amazon.com/images/I/81L8VxKmFOL._AC_SL1500_.jpg",
    category: "fertilizers",
    description: "100% organic neem cake fertilizer for soil enrichment and natural pest control. Slow release nutrients for plants.",
    rating: 4.4,
    reviews: 167,
    inStock: true,
  },
  {
    id: "5",
    name: "Urea Fertilizer Pack - 5kg",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/71jVq+URc2L._AC_SL1500_.jpg",
    category: "fertilizers",
    description: "High grade urea fertilizer for enhanced plant growth and nitrogen supplementation. Suitable for all crops.",
    rating: 4.2,
    reviews: 203,
    inStock: true,
  },
  {
    id: "6",
    name: "Garden Tool Set (5 pcs)",
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    image: "https://m.media-amazon.com/images/I/81Sh+GbtfQL._AC_SL1500_.jpg",
    category: "tools",
    description: "Complete gardening tool set including trowel, pruner, rake, weeder, and cultivator. Durable steel construction.",
    rating: 4.6,
    reviews: 145,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "7",
    name: "Steel Farming Shovel",
    price: 899,
    image: "https://m.media-amazon.com/images/I/81zn-K6zoEL._AC_SL1500_.jpg",
    category: "tools",
    description: "Heavy duty steel farming shovel with ergonomic wooden handle. Perfect for digging and soil preparation.",
    rating: 4.3,
    reviews: 78,
    inStock: true,
  },
  {
    id: "8",
    name: "Organic Compost Fertilizer - 10kg",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/91SoeJqvqYL._AC_SL1500_.jpg",
    category: "organic",
    description: "Premium organic compost made from kitchen waste and farm residue. Rich in nutrients and beneficial microorganisms.",
    rating: 4.5,
    reviews: 189,
    inStock: true,
  },
  {
    id: "9",
    name: "Drip Irrigation Kit (100m Pipe + Fittings)",
    price: 3499,
    originalPrice: 3999,
    discount: 13,
    image: "https://m.media-amazon.com/images/I/81iN0R9EBaL._AC_SL1500_.jpg",
    category: "tools",
    description: "Complete drip irrigation system for efficient water management. Includes pipes, emitters, and connectors.",
    rating: 4.4,
    reviews: 112,
    inStock: true,
    isNew: true,
  },
  {
    id: "10",
    name: "Vermicompost - 25kg Pack",
    price: 1799,
    image: "https://m.media-amazon.com/images/I/81h6rp6N1uL._AC_SL1500_.jpg",
    category: "organic",
    description: "High quality vermicompost produced by earthworms. Rich in nutrients and improves soil health naturally.",
    rating: 4.6,
    reviews: 234,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "11",
    name: "Hybrid Maize Seeds - 1kg",
    price: 799,
    image: "https://m.media-amazon.com/images/I/71Ed-M4VfUL._AC_SL1500_.jpg",
    category: "seeds",
    description: "High yielding hybrid maize seeds with excellent drought tolerance and disease resistance.",
    rating: 4.3,
    reviews: 95,
    inStock: true,
  },
  {
    id: "12",
    name: "Biodegradable Plant Pots - Set of 12",
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: "https://m.media-amazon.com/images/I/71wNwrKpHcL._AC_SL1500_.jpg",
    category: "tools",
    description: "Eco-friendly biodegradable plant pots made from natural fibers. Perfect for seedling cultivation.",
    rating: 4.4,
    reviews: 156,
    inStock: true,
    isNew: true,
  },
];

export const getFeaturedProducts = () => products.filter(p => p.isFeatured);
export const getNewProducts = () => products.filter(p => p.isNew);
export const getProductsByCategory = (category: string) => 
  category === "all" ? products : products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);