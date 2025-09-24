import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background py-4 sm:py-8 lg:py-0">
      {/* CEO Image Background - Right Side */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/20"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img
            src="https://i.ibb.co/MybqGSKH/62976cc4-ce5d-428c-93a3-d7c886ce8a8d.jpg"
            alt="CEO Portrait"
            className="w-full h-full object-cover object-center lg:object-left-top"
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
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen lg:min-h-screen">
          {/* Left Column - Dramatic Content */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-10 lg:space-y-12 animate-fade-in-up pt-16 sm:pt-20 md:pt-24 lg:pt-8">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-1 px-1 py-0.5 bg-electric-blue/5 rounded-full border border-electric-blue/10 mb-2 max-w-xs">
              <div className="w-0.5 h-0.5 bg-electric-blue rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-electric-blue text-xs font-medium tracking-wide uppercase truncate">Available for Strategic Consulting</span>
            </div>
            
            {/* Massive Stacked Headline */}
            <div className="space-y-2">
              <h1 className="mega-headline">
                BUILDING
                <span className="block">THE FUTURE</span>
                <span className="block text-electric-blue">OF ED-TECH</span>
              </h1>
              
              <p className="hero-subtitle mt-8 lg:mt-10 max-w-lg">
                I'm Basil — Builder. Dreamer. CEO.
                Founder of acceptly.ai, where we're reinventing college admissions with AI. I help students unlock opportunity and help teams build the future.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#schedule-call" className="btn-primary-modern group inline-flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Meeting
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a href="#portfolio" className="btn-ghost-modern group inline-flex items-center justify-center">
                Learn More
              </a>
            </div>
            
            {/* Achievement Stats */}
            <div className="flex items-center space-x-8 lg:space-x-12 pt-8 lg:pt-10">
              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-bold text-primary-text">5+</div>
                <div className="text-sm lg:text-base text-secondary-text font-medium tracking-wide">Global Partners</div>
              </div>
              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-bold text-primary-text">$500K+</div>
                <div className="text-sm lg:text-base text-secondary-text font-medium tracking-wide">Capital Raised</div>
              </div>
              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-bold text-primary-text">5+</div>
                <div className="text-sm lg:text-base text-secondary-text font-medium tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Reserved for Image Background */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            {/* Floating accent elements */}
            <div className="absolute top-1/4 -right-4 w-2 h-16 bg-electric-blue/20 rounded-full animate-float opacity-60"></div>
            <div className="absolute bottom-1/3 -right-8 w-1 h-24 bg-electric-blue/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-2 right-8 z-20">
        <div className="flex items-center space-x-3 text-secondary-text">
          <div className="w-8 h-px bg-electric-blue/40"></div>
          <div className="text-xs font-medium tracking-wider uppercase">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
};