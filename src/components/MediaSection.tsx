import { useState } from "react";
import { Play, X } from "lucide-react";

// Generate video placeholders
const generateVideoPlaceholders = () => {
  return [
    {
      id: 1,
      title: "Scaling Tech Startups in 2024",
      event: "TechCrunch Disrupt",
      thumbnail: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=640&h=360&fit=crop",
      duration: "28:45"
    },
    {
      id: 2,
      title: "The Future of AI in Enterprise",
      event: "Stanford AI Conference",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=360&fit=crop",
      duration: "35:12"
    },
    {
      id: 3,
      title: "Building Global Remote Teams",
      event: "Remote Work Summit",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=640&h=360&fit=crop",
      duration: "22:30"
    },
    {
      id: 4,
      title: "Venture Capital Trends 2024",
      event: "Forbes Under 30",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&h=360&fit=crop",
      duration: "31:08"
    },
    {
      id: 5,
      title: "Product-Market Fit Strategies",
      event: "Product Hunt Meetup",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=640&h=360&fit=crop",
      duration: "25:47"
    },
    {
      id: 6,
      title: "Leadership in Crisis",
      event: "Harvard Business Review",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=640&h=360&fit=crop",
      duration: "19:33"
    },
    {
      id: 7,
      title: "Sustainable Tech Innovation",
      event: "Climate Tech Conference",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&h=360&fit=crop",
      duration: "42:15"
    },
    {
      id: 8,
      title: "The Next Billion Users",
      event: "Google I/O Extended",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=360&fit=crop",
      duration: "38:22"
    }
  ];
};

export const MediaSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const videos = generateVideoPlaceholders();

  const openVideoModal = (videoId: number) => {
    setSelectedVideo(videoId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-headline mb-6">
            In the
            <span className="text-electric-blue"> Spotlight</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Keynotes, interviews, and thought leadership sessions from global conferences and media outlets
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card group cursor-pointer"
              onClick={() => openVideoModal(video.id)}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-48 bg-card">
                <img
                  src={`https://picsum.photos/640/360?random=${video.id + 200}`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button */}
                <div className="video-play-button">
                  <Play className="w-6 h-6 ml-1" />
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                  {video.duration}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              
              {/* Video Info */}
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-primary-text text-sm line-clamp-2 group-hover:text-electric-blue transition-colors">
                  {video.title}
                </h3>
                <p className="text-secondary-text text-xs">
                  {video.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              {/* Placeholder Video Player */}
              <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-text mb-2">
                      {videos.find(v => v.id === selectedVideo)?.title}
                    </h3>
                    <p className="text-secondary-text">
                      Video player would load here
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};