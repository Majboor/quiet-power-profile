import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Generate placeholder images for the gallery
const generatePlaceholderImages = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    url: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=${300 + (i % 3) * 100}&fit=crop&crop=faces`,
    alt: `Gallery image ${i + 1}`,
    category: i < 12 ? 'team' : i < 25 ? 'hackathons' : 'awards'
  }));
};

export const JourneySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = generatePlaceholderImages(38);
  
  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentImageIndex(index);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Column - Bio Narrative */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h2 className="section-headline">
                The Journey to
                <span className="block text-electric-blue">Global Impact</span>
              </h2>
              
              <div className="space-y-6 body-large">
                <p>
                  Started my entrepreneurial journey at 19, building my first tech company from a dorm room. 
                  What began as a <span className="accent-highlight">simple idea</span> evolved into a global platform 
                  serving millions of users worldwide.
                </p>
                
                <p>
                  Over the past 15 years, I've had the privilege of working alongside some of the most 
                  <span className="accent-highlight">innovative minds</span> in Silicon Valley, scaling companies 
                  from seed stage to IPO, and mentoring the next generation of tech leaders.
                </p>
                
                <p>
                  From winning hackathons at Stanford and MIT to speaking at global conferences, my journey 
                  has been defined by a relentless pursuit of <span className="accent-highlight">technological excellence</span> 
                  and meaningful connections with visionaries across the globe.
                </p>
              </div>
            </div>
            
            <div className="pt-6">
              <Button className="btn-primary">
                Read Full Story
              </Button>
            </div>
          </div>
          
          {/* Right Column - Photo Gallery */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-primary-text mb-2">
                  Moments That Matter
                </h3>
                <p className="text-secondary-text">
                  Building relationships, winning competitions, and creating impact across the globe
                </p>
              </div>
              
              {/* Masonry Grid */}
              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className="photo-item cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden rounded-lg bg-card">
                      <img
                        src={`https://picsum.photos/400/${300 + (index % 3) * 100}?random=${index + 100}`}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          image.category === 'team' ? 'bg-electric-blue/20 text-electric-blue' :
                          image.category === 'hackathons' ? 'bg-emerald-500/20 text-emerald-400' :
                          'bg-amber-500/20 text-amber-400'
                        }`}>
                          {image.category === 'team' ? 'Team' :
                           image.category === 'hackathons' ? 'Hackathon' : 'Award'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={`https://picsum.photos/800/600?random=${currentImageIndex + 100}`}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Controls */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};