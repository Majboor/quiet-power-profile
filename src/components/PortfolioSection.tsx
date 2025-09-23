import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    name: "TechFlow AI",
    description: "Revolutionary AI platform transforming enterprise workflows.",
    logo: "🚀",
    metrics: "$50M ARR",
    status: "Acquired by Google",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    name: "GlobalConnect",
    description: "Cross-border payment infrastructure for emerging markets.",
    logo: "🌍",
    metrics: "2M+ Users",
    status: "Series B",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    name: "DataVault",
    description: "Enterprise-grade security solutions for Fortune 500.",
    logo: "🔐",
    metrics: "$25M Revenue",
    status: "Profitable",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    name: "HealthTech Pro",
    description: "AI-powered healthcare diagnostics platform.",
    logo: "⚕️",
    metrics: "500K+ Patients",
    status: "IPO Ready",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 5,
    name: "EduNext",
    description: "Personalized learning platform for modern education.",
    logo: "📚",
    metrics: "10M Students",
    status: "Unicorn",
    color: "from-violet-500 to-purple-600"
  },
  {
    id: 6,
    name: "GreenEnergy",
    description: "Sustainable energy solutions for smart cities.",
    logo: "🌱",
    metrics: "Carbon Neutral",
    status: "Series A",
    color: "from-green-500 to-emerald-600"
  }
];

export const PortfolioSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-headline mb-6">
            Portfolio of
            <span className="text-electric-blue"> Innovation</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Leading companies that are reshaping industries and creating the future we want to live in
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="tech-card group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Logo & Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{item.logo}</div>
                    <div>
                      <h3 className="font-bold text-primary-text group-hover:text-electric-blue transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-electric-blue/10 text-electric-blue rounded-full">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-secondary-text group-hover:text-electric-blue transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                {/* Description */}
                <p className="text-secondary-text text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-card-hover/20">
                  <div className="flex items-center space-x-2">
                    {item.metrics.includes('$') && <TrendingUp className="w-4 h-4 text-emerald-400" />}
                    {item.metrics.includes('Users') && <Users className="w-4 h-4 text-blue-400" />}
                    {item.metrics.includes('Carbon') && <Zap className="w-4 h-4 text-green-400" />}
                    {!item.metrics.includes('$') && !item.metrics.includes('Users') && !item.metrics.includes('Carbon') && 
                      <TrendingUp className="w-4 h-4 text-purple-400" />}
                    <span className="text-sm font-medium text-primary-text">
                      {item.metrics}
                    </span>
                  </div>
                  
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-electric-blue/30 rounded-lg transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-card/50 rounded-xl border border-electric-blue/20">
            <div className="text-4xl">💡</div>
            <div className="text-left">
              <h3 className="font-semibold text-primary-text mb-1">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-secondary-text text-sm">
                Let's discuss how we can bring your vision to life
              </p>
            </div>
            <button className="btn-primary ml-4">
              Start Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};