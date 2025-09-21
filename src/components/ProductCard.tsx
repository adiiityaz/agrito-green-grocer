import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

const ProductCard = ({ product, viewMode = "grid" }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="relative flex-shrink-0">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </Link>
              {product.discount && (
                <Badge className="absolute -top-2 -left-2 bg-destructive text-destructive-foreground">
                  -{product.discount}%
                </Badge>
              )}
              {product.isNew && (
                <Badge className="absolute -top-2 -right-2 bg-success text-success-foreground">
                  New
                </Badge>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <div className="text-right ml-4">
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-lg font-bold text-primary">
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <Button size="sm" className="mt-2 w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <CardContent className="p-0">
        <div className="relative">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              -{product.discount}%
            </Badge>
          )}
          {product.isNew && (
            <Badge className="absolute top-2 right-2 bg-success text-success-foreground">
              New
            </Badge>
          )}
          {product.isFeatured && !product.isNew && (
            <Badge className="absolute top-2 right-2 bg-warning text-warning-foreground">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
              {product.name}
            </h3>
          </Link>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviews})
            </span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through mr-2">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-lg font-bold text-primary">
                ₹{product.price.toLocaleString()}
              </span>
            </div>
            {!product.inStock && (
              <Badge variant="destructive">Out of Stock</Badge>
            )}
          </div>
          
          <Button 
            className="w-full" 
            disabled={!product.inStock}
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;