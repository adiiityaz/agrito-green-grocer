import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Filter, SortAsc, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import Layout from "@/components/Layout";
import { products, categories, getProductsByCategory, type Product } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    let filtered = getProductsByCategory(selectedCategory);

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured first, then by rating
        filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.rating - a.rating;
        });
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const newParams = new URLSearchParams(searchParams);
    if (category === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", category);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-hero p-8 md:p-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
              Premium Agriculture Products
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl">
              Discover our comprehensive collection of high-quality seeds, fertilizers, tools, and organic products designed to maximize your farming success
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                ✨ Free Shipping over ₹999
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                🌱 Certified Organic Products
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                🚚 Fast Delivery Nationwide
              </Badge>
            </div>
          </div>
        </div>

        {/* Enhanced Filters and Search */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Input
              type="search"
              placeholder="Search for seeds, fertilizers, tools..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 focus:border-primary transition-colors duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg className="h-5 w-5 text-muted-foreground hover:text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Enhanced Category Filters */}
          <div className="bg-card rounded-xl p-6 border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Shop by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:scale-105 ${
                    selectedCategory === category.id 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "hover:bg-primary/10 hover:border-primary"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  {selectedCategory === category.id && (
                    <Badge variant="secondary" className="ml-1 bg-primary-foreground/20 text-primary-foreground">
                      {getProductsByCategory(category.id).length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Sort and View Options */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-muted/30 rounded-xl p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-56 bg-background border-2 hover:border-primary transition-colors">
                  <SortAsc className="w-4 h-4 mr-2 text-primary" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">🌟 Featured Products</SelectItem>
                  <SelectItem value="price-low">💰 Price: Low to High</SelectItem>
                  <SelectItem value="price-high">💎 Price: High to Low</SelectItem>
                  <SelectItem value="rating">⭐ Highest Rated</SelectItem>
                  <SelectItem value="name">📝 Name A-Z</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="font-medium text-foreground">{filteredProducts.length}</span>
                products found
                {selectedCategory !== "all" && (
                  <Badge variant="outline" className="ml-2">
                    in {categories.find(c => c.id === selectedCategory)?.name}
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">View:</span>
              <div className="flex border-2 rounded-lg overflow-hidden bg-background">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none border-none"
                >
                  <Grid className="w-4 h-4" />
                  <span className="ml-2 hidden sm:inline">Grid</span>
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none border-none"
                >
                  <List className="w-4 h-4" />
                  <span className="ml-2 hidden sm:inline">List</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="space-y-6">
            {/* Products Grid */}
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in" 
              : "space-y-4 animate-fade-in"
            }>
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} viewMode={viewMode} />
                </div>
              ))}
            </div>
            
            {/* Load More Section (placeholder for future pagination) */}
            {filteredProducts.length >= 12 && (
              <div className="text-center pt-8">
                <Button variant="outline" size="lg" className="px-8">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Card className="text-center py-16 bg-gradient-to-br from-muted/50 to-muted/20 border-dashed">
            <CardContent className="space-y-6">
              <div className="text-6xl mb-4">🔍</div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  No products found
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
                  We couldn't find any products matching your search criteria. Try adjusting your filters or search terms.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/shop">
                    Browse All Products
                  </Link>
                </Button>
                <Button onClick={() => handleSearchChange("")} variant="default">
                  Clear Search
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Shop;