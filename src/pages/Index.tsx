import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Shield, Sparkles } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";
import { Link } from "react-router-dom";
import Love from './Love'
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="text-2xl font-bold text-primary">✨ Mimi Shop</div>
        <div className="hidden md:flex space-x-8 text-foreground/80">
          <a href="#features" className="hover:text-primary transition-smooth">Features</a>
          <a href="#reviews" className="hover:text-primary transition-smooth">Reviews</a>
          <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
        </div>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
          Sign In
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/50 px-4 py-2 rounded-full text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>New Product Launch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Perfect
              <span className="block text-primary animate-pulse-soft">Beauty</span>
              Companion
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience the magic of our revolutionary beauty product that transforms your daily routine into a luxurious self-care ritual.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover-scale">
                Shop Now - $49.99
              </Button>
              <Button size="lg" variant="outline" className="hover-float transition-smooth">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background"></div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Loved by 10,000+ customers</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-3xl animate-float"></div>
              <Link to="/love">
              <img
                src={heroProduct}
                alt="Beautiful product showcase"
                className="relative z-10 w-full rounded-3xl shadow-medium hover-scale transition-smooth cursor-pointer"
              />
            </Link>
         
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 md:px-12 bg-gradient-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">Mimi Shop</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three powerful features that make our product stand out from the crowd
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description: "Crafted with the finest ingredients and attention to detail for your perfect experience."
              },
              {
                icon: Shield,
                title: "100% Safe",
                description: "Dermatologist tested and approved. Safe for all skin types with natural ingredients."
              },
              {
                icon: Sparkles,
                title: "Instant Results",
                description: "See immediate improvements in your skin's texture, glow, and overall appearance."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover-float bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="px-6 py-20 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Somchai Maimeesiw",
                review: "This product completely transformed my skincare routine! I've never felt more confident.",
                rating: 5
              },
              {
                name: "Thanakorn PakEsan",
                review: "The results are incredible. My skin has never looked better. Highly recommend!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-6 text-muted-foreground">"{review.review}"</p>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-3"></div>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Beauty Routine?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of happy customers and discover your most radiant self
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" className="hover-scale transition-bounce shadow-medium">
              Get Started Today - $49.99
            </Button>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <Shield className="w-4 h-4" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold text-primary mb-4">✨ Mimi Shop</div>
          <p className="text-muted-foreground mb-8">Your perfect beauty companion</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Contact Us</a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            © 2024 Mimi Shop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
