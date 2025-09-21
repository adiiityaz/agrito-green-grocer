import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower farmers with high-quality agricultural products and sustainable farming solutions that boost productivity and ensure food security."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in integrity, sustainability, and building lasting relationships with farmers and communities across India."
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "Every product goes through rigorous quality checks to ensure farmers get the best seeds, fertilizers, and tools for their needs."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "We've supported over 50,000 farmers across India, helping them increase yields and adopt sustainable farming practices."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Agrito</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cultivating success through quality agriculture products and sustainable farming solutions
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2010, Agrito began as a small initiative to support local farmers in Maharashtra. 
                What started as a passion project to provide quality seeds and fertilizers has grown into 
                one of India's most trusted agriculture product suppliers.
              </p>
              <p>
                Our founders, a team of agricultural engineers and farming enthusiasts, recognized the gap 
                between traditional farming methods and modern agricultural science. They set out to bridge 
                this gap by making high-quality agricultural inputs accessible to farmers across India.
              </p>
              <p>
                Today, Agrito serves thousands of farmers nationwide, offering everything from premium seeds 
                and organic fertilizers to modern farming tools and irrigation systems. We remain committed 
                to our original mission: empowering farmers with the tools they need to succeed.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
              alt="Agricultural landscape"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-lg p-8 text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">50,000+</div>
              <div className="text-primary-foreground/80">Farmers Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-primary-foreground/80">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Products Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">14 Years</div>
              <div className="text-primary-foreground/80">Industry Experience</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              At Agrito, we're more than just a supplier – we're partners in your farming journey. 
              Our team of agricultural experts, quality control specialists, and customer service 
              professionals work tirelessly to ensure you get the best products and support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Sustainable Farming</h3>
                <p className="text-muted-foreground">
                  Promoting eco-friendly practices that protect our environment for future generations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously bringing the latest agricultural technology and techniques to farmers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-info rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Partnership</h3>
                <p className="text-muted-foreground">
                  Building long-term relationships based on trust, transparency, and mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;