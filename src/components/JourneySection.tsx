import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const JourneySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [visibleImageCount, setVisibleImageCount] = useState(6);

  // Use your local images from the assets folder (only JPG and jpg files, excluding MOV and HEIC)
  const localImages = [
    { id: 1, src: "/assets/1.JPG", alt: "Professional moment 1" },
    { id: 2, src: "/assets/2.JPG", alt: "Professional moment 2" },
    { id: 3, src: "/assets/3.JPG", alt: "Professional moment 3" },
    { id: 4, src: "/assets/4.JPG", alt: "Professional moment 4" },
    { id: 5, src: "/assets/5.JPG", alt: "Professional moment 5" },
    { id: 6, src: "/assets/6.JPG", alt: "Professional moment 6" },
    { id: 7, src: "/assets/7.JPG", alt: "Professional moment 7" },
    { id: 8, src: "/assets/8.JPG", alt: "Professional moment 8" },
    { id: 10, src: "/assets/10.JPG", alt: "Professional moment 10" },
    { id: 12, src: "/assets/12.JPG", alt: "Professional moment 12" },
    { id: 13, src: "/assets/13.JPG", alt: "Professional moment 13" },
    { id: 14, src: "/assets/14.JPG", alt: "Professional moment 14" },
    { id: 15, src: "/assets/15.JPG", alt: "Professional moment 15" },
    { id: 16, src: "/assets/16.JPG", alt: "Professional moment 16" },
    { id: 21, src: "/assets/21.JPG", alt: "Professional moment 21" },
    { id: 22, src: "/assets/22.JPG", alt: "Professional moment 22" },
    { id: 23, src: "/assets/23.JPG", alt: "Professional moment 23" },
    { id: 24, src: "/assets/24.JPG", alt: "Professional moment 24" },
    { id: 25, src: "/assets/25.JPG", alt: "Professional moment 25" },
    { id: 26, src: "/assets/26.JPG", alt: "Professional moment 26" },
    { id: 27, src: "/assets/27.JPG", alt: "Professional moment 27" },
    { id: 28, src: "/assets/28.JPG", alt: "Professional moment 28" },
    { id: 32, src: "/assets/32.JPG", alt: "Professional moment 32" },
    { id: 33, src: "/assets/33.JPG", alt: "Professional moment 33" },
    { id: 34, src: "/assets/34.JPG", alt: "Professional moment 34" },
    { id: 36, src: "/assets/36.jpg", alt: "Professional moment 36" },
    { id: 37, src: "/assets/37.jpg", alt: "Professional moment 37" },
    { id: 38, src: "/assets/38.jpg", alt: "Professional moment 38" },
    { id: 39, src: "/assets/39.JPG", alt: "Professional moment 39" },
    { id: 40, src: "/assets/40.JPG", alt: "Professional moment 40" },
    { id: 41, src: "/assets/41.JPG", alt: "Professional moment 41" },
    { id: 42, src: "/assets/42.JPG", alt: "Professional moment 42" },
    { id: 43, src: "/assets/43.JPG", alt: "Professional moment 43" },
    { id: 44, src: "/assets/44.JPG", alt: "Professional moment 44" }
  ];

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % placeholderImages.length);
    }
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! - 1 + placeholderImages.length) % placeholderImages.length);
    }
  };

  const showMoreImages = () => {
    setVisibleImageCount(prev => Math.min(prev + 6, localImages.length));
  };

  const showLessImages = () => {
    setVisibleImageCount(6);
  };

  // Show images progressively
  const displayedImages = localImages.slice(0, visibleImageCount);
  const hasMoreImages = visibleImageCount < localImages.length;
  const hasLessImages = visibleImageCount > 6;

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-px h-40 bg-electric-blue/10"></div>
      <div className="absolute bottom-20 right-20 w-px h-60 bg-electric-blue/5"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Bold Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="section-headline-editorial">
                THE
                <span className="block">JOURNEY</span>
              </h2>
              
              <div className="space-y-6 text-secondary-text leading-relaxed">
                <p className="text-lg">
                  From Silicon Valley boardrooms to global tech conferences, my journey has been defined by 
                  <span className="text-electric-blue font-medium"> turning ambitious visions into reality</span>.
                </p>
                
                <p>
                  Over the past 15 years, I've had the privilege of working alongside some of the brightest minds 
                  in technology, building companies that have collectively generated over $100M in revenue and 
                  impacted millions of users worldwide.
                </p>
                
                <p>
                  These moments capture the essence of that journey — from late-night hackathons in San Francisco 
                  to keynote stages in New York, from intimate team meetings to global partnership celebrations. 
                  Each image tells a story of <span className="text-primary-text font-medium">collaboration, innovation, and relentless pursuit of excellence</span>.
                </p>
                
                <p className="text-electric-blue font-medium">
                  → Building connections across continents<br/>
                  → Celebrating breakthrough moments<br/>
                  → Leading teams through challenges<br/>
                  → Creating lasting partnerships
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Dynamic Photo Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {displayedImages.map((image, index) => (
                <div
                  key={image.id}
                  className="cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-card border border-card/50 transition-all duration-300 hover:border-electric-blue/30 hover:shadow-glow aspect-square">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-electric-blue/0 group-hover:bg-electric-blue rounded-full transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Show More Button */}
            {hasMoreImages && (
              <div className="mt-8 text-center">
                <Button 
                  onClick={showMoreImages}
                  variant="ghost" 
                  className="btn-ghost-modern group"
                >
                  Show More Photos
                  <ChevronDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
                </Button>
                <p className="text-sm text-secondary-text mt-2">
                  {localImages.length - visibleImageCount} more photos available
                </p>
              </div>
            )}
            
            {/* Show Less Button */}
            {hasLessImages && (
              <div className="mt-8 text-center">
                <Button 
                  onClick={showLessImages}
                  variant="ghost" 
                  className="btn-ghost-modern group"
                >
                  Show Less
                  <ChevronDown className="w-4 h-4 ml-2 rotate-180 transition-transform group-hover:-translate-y-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage !== null && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-primary-text hover:text-electric-blue transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Navigation */}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-text hover:text-electric-blue transition-colors z-10 text-2xl"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-text hover:text-electric-blue transition-colors z-10 text-2xl"
            >
              →
            </button>
            
            {/* Main Image */}
            <img
              src={localImages[selectedImage].src}
              alt={localImages[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-secondary-text text-sm">
              {selectedImage + 1} / {localImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};