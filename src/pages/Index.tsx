import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { MediaSection } from "@/components/MediaSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CompetenciesSection } from "@/components/CompetenciesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <JourneySection />
      <MediaSection />
      <PortfolioSection />
      <CompetenciesSection />
      <Footer />
    </div>
  );
};

export default Index;