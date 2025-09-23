import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* CEO Image Background - Right Side */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/20"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img
            src="https://i.ibb.co/MybqGSKH/62976cc4-ce5d-428c-93a3-d7c886ce8a8d.jpg"
            alt="CEO Portrait"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/80"></div>
        </div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3ccircle cx='2' cy='2' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
          {/* Left Column - Dramatic Content */}
          <div className="lg:col-span-7 space-y-12 animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-electric-blue/5 rounded-full border border-electric-blue/10">
              <div className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="text-electric-blue text-xs font-medium tracking-wide uppercase">Available for Strategic Consulting</span>
            </div>
            
            {/* Massive Stacked Headline */}
            <div className="space-y-2">
              <h1 className="mega-headline">
                BUILDING
                <span className="block">THE FUTURE</span>
                <span className="block text-electric-blue">OF TECH</span>
              </h1>
              
              <p className="hero-subtitle mt-8 max-w-lg">
                CEO & Founder with a proven track record of scaling global tech ventures and building 
                high-impact teams across Silicon Valley and beyond.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary-modern group">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="ghost" className="btn-ghost-modern">
                View My Work
              </Button>
            </div>
            
            {/* Achievement Stats */}
            <div className="flex items-center space-x-12 pt-8">
              <div className="text-left">
                <div className="text-3xl font-bold text-primary-text">50+</div>
                <div className="text-sm text-secondary-text font-medium tracking-wide">Global Partners</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-primary-text">$100M+</div>
                <div className="text-sm text-secondary-text font-medium tracking-wide">Revenue Generated</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-primary-text">15+</div>
                <div className="text-sm text-secondary-text font-medium tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Reserved for Image Background */}
          <div className="lg:col-span-5 relative">
            {/* Floating accent elements */}
            <div className="absolute top-1/4 -right-4 w-2 h-16 bg-electric-blue/20 rounded-full animate-float opacity-60"></div>
            <div className="absolute bottom-1/3 -right-8 w-1 h-24 bg-electric-blue/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8">
        <div className="flex items-center space-x-3 text-secondary-text">
          <div className="w-8 h-px bg-electric-blue/40"></div>
          <div className="text-xs font-medium tracking-wider uppercase">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
};