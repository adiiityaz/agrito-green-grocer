import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Truck, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, getNewProducts, categories } from "@/data/products";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  const heroSlides = [
    {
      title: "Fresh from Farm to You",
      subtitle: "Quality Agricultural Products for Modern Farming",
      description: "Discover our wide range of premium seeds, fertilizers, and farming tools designed to maximize your harvest and ensure sustainable agriculture.",
      buttonText: "Shop Now",
      buttonLink: "/shop",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Seasonal Sale - Up to 30% Off",
      subtitle: "Premium Seeds & Fertilizers",
      description: "Limited time offer on our best-selling agricultural products. Stock up for the new season and save big on quality farming essentials.",
      buttonText: "View Offers",
      buttonLink: "/shop?category=seeds",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Expert Farming Advice",
      subtitle: "From Our Agricultural Specialists",
      description: "Get personalized farming solutions and expert guidance to improve your crop yields and implement sustainable farming practices.",
      buttonText: "Learn More",
      buttonLink: "/about",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const testimonials = [
    {
      name: "Ramesh Patil",
      location: "Pune, Maharashtra",
      quote: "Agrito's organic wheat seeds gave me 40% higher yield than expected. Excellent quality and great customer service!",
      rating: 5
    },
    {
      name: "Sunita Devi",
      location: "Jaipur, Rajasthan",
      quote: "The drip irrigation kit has revolutionized my farming. Water consumption reduced by 60% with better crop health.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      location: "Ludhiana, Punjab",
      quote: "Fast delivery and genuine products. The garden tool set is of excellent quality and very durable.",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="relative h-96 md:h-[500px]">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide ? "translate-x-0" : 
                index < currentSlide ? "-translate-x-full" : "translate-x-full"
              }`}
            >
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
              </div>
              
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-primary-foreground">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl mb-6 animate-slide-up">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg mb-8 text-primary-foreground/90 animate-fade-in">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                    <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                      <Link to={slide.buttonLink}>
                        {slide.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Link to="/shop">Explore Products</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground p-2 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary-foreground" : "bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-success" />
              <div>
                <p className="font-semibold text-foreground">Secure Checkout</p>
                <p className="text-sm text-muted-foreground">100% Safe & Secure</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="h-8 w-8 text-success" />
              <div>
                <p className="font-semibold text-foreground">Free Delivery</p>
                <p className="text-sm text-muted-foreground">On orders above ₹999</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="h-8 w-8 text-success" />
              <div>
                <p className="font-semibold text-foreground">Quality Products</p>
                <p className="text-sm text-muted-foreground">Premium agricultural products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find the perfect agricultural products for your farming needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <Link key={category.id} to={`/shop?category=${category.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:animate-float">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Premium quality {category.name.toLowerCase()} for modern farming
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592983873570-2798b9a593e0?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-current" />
              Most Popular
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our hand-picked selection of premium agricultural products trusted by thousands of farmers
            </p>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/shop">
                Explore All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      ⭐ Featured
                    </Badge>
                  </div>
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Just Arrived
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-success to-success/70 bg-clip-text text-transparent">
                New Arrivals
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Fresh products just added to our collection - be the first to try these innovative agricultural solutions
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/shop">
                Shop New Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-success text-success-foreground shadow-lg animate-pulse">
                      🆕 New
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <div className="w-3 h-3 bg-success rounded-full animate-ping"></div>
                  </div>
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              What Our Farmers Say
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Real stories from satisfied customers across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-primary-foreground/90 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-primary-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary-foreground/70">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated with Agrito
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest farming tips, product updates, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 10,000+ farmers who trust Agrito for their agricultural needs
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;