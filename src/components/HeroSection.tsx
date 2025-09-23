import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-bg flex items-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.05'%3e%3ccircle cx='5' cy='5' r='2'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-electric-blue/10 rounded-full border border-electric-blue/20">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="text-electric-blue text-sm font-medium">Available for Strategic Consulting</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="hero-headline">
                Building the
                <span className="block text-electric-blue">Future of Tech</span>
              </h1>
              
              <p className="body-large max-w-lg">
                CEO & Founder with a proven track record of scaling <span className="accent-highlight">global tech ventures</span> and building 
                high-impact teams across Silicon Valley and beyond.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button className="btn-ghost">
                View My Work
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-text">50+</div>
                <div className="text-sm text-secondary-text">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-text">$100M+</div>
                <div className="text-sm text-secondary-text">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-text">15+</div>
                <div className="text-sm text-secondary-text">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Headshot */}
          <div className="relative lg:justify-self-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-electric-blue/20 rounded-2xl blur-xl animate-pulse-glow"></div>
              
              {/* Main Image */}
              <div className="relative bg-gradient-dark-surface rounded-2xl overflow-hidden border border-electric-blue/20">
                <img
                  src="https://i.ibb.co/MybqGSKH/62976cc4-ce5d-428c-93a3-d7c886ce8a8d.jpg"
                  alt="CEO Portrait"
                  className="w-full max-w-lg h-auto object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-electric-blue rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-electric-blue/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-secondary-text">
          <div className="text-sm">Scroll to explore</div>
          <div className="w-px h-8 bg-electric-blue/40 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};