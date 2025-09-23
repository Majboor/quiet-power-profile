import { useState } from "react";
import { Play, X } from "lucide-react";

export const MediaSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videos = [
    {
      id: 1,
      title: "The Future of AI in Enterprise",
      event: "TechCrunch Disrupt 2024",
      thumbnail: "https://picsum.photos/800/450?random=1001",
      duration: "18:42"
    },
    {
      id: 2,
      title: "Building Unicorns: Lessons from Silicon Valley",
      event: "Y Combinator Demo Day",
      thumbnail: "https://picsum.photos/800/450?random=1002",
      duration: "25:15"
    },
    {
      id: 3,
      title: "The Intersection of Web3 and Traditional Finance",
      event: "Bloomberg Technology Summit",
      thumbnail: "https://picsum.photos/800/450?random=1003",
      duration: "32:08"
    },
    {
      id: 4,
      title: "Scaling Global Teams in Remote-First Era",
      event: "Harvard Business Review",
      thumbnail: "https://picsum.photos/800/450?random=1004",
      duration: "14:33"
    },
    {
      id: 5,
      title: "Investment Strategies for Deep Tech Startups",
      event: "Andreessen Horowitz Summit",
      thumbnail: "https://picsum.photos/800/450?random=1005",
      duration: "28:47"
    },
    {
      id: 6,
      title: "The Rise of Quantum Computing",
      event: "MIT Technology Review",
      thumbnail: "https://picsum.photos/800/450?random=1006",
      duration: "22:19"
    },
    {
      id: 7,
      title: "Sustainable Tech: Profit Meets Purpose",
      event: "World Economic Forum",
      thumbnail: "https://picsum.photos/800/450?random=1007",
      duration: "19:52"
    },
    {
      id: 8,
      title: "Leadership in the Age of Disruption",
      event: "Stanford Leadership Podcast",
      thumbnail: "https://picsum.photos/800/450?random=1008",
      duration: "41:36"
    }
  ];

  const openModal = (videoIndex: number) => {
    setSelectedVideo(videoIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section className="py-32 bg-card/20 relative">
      {/* Accent Lines */}
      <div className="absolute top-0 left-1/4 w-px h-24 bg-electric-blue/20"></div>
      <div className="absolute bottom-0 right-1/3 w-px h-32 bg-electric-blue/10"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="space-y-16">
          {/* Editorial Header */}
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="section-headline-editorial">
              IN THE
              <span className="block text-electric-blue">SPOTLIGHT</span>
            </h2>
            <p className="text-xl text-secondary-text leading-relaxed">
              Keynote presentations, interviews, and thought leadership moments that have shaped 
              conversations in the global tech ecosystem.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="relative aspect-video bg-card rounded-xl overflow-hidden border border-card/50 transition-all duration-300 hover:border-electric-blue/30 hover:shadow-glow hover:-translate-y-1">
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-electric-blue/90 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-electric-blue group-hover:scale-110">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm text-primary-text text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold text-primary-text leading-tight group-hover:text-electric-blue transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-secondary-text font-medium">
                    {video.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo !== null && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-primary-text hover:text-electric-blue transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Video Container */}
            <div className="aspect-video bg-card rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-card/50">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-8 h-8 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-text mb-2">
                      {videos[selectedVideo].title}
                    </h3>
                    <p className="text-secondary-text">
                      {videos[selectedVideo].event}
                    </p>
                    <p className="text-sm text-secondary-text mt-2">
                      Video placeholder - {videos[selectedVideo].duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};