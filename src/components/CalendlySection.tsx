import { useEffect } from "react";

export const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="schedule-call" className="py-32 bg-card/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-px h-40 bg-electric-blue/10"></div>
      <div className="absolute bottom-20 right-20 w-px h-60 bg-electric-blue/5"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="section-headline-editorial">
              LET'S
              <span className="block text-electric-blue">CONNECT</span>
            </h2>
            <p className="text-xl text-secondary-text leading-relaxed">
              Ready to discuss your next big project? Book a strategic consultation 
              and let's explore how we can build something extraordinary together.
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/acceptlyai/30min" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-secondary-text mb-6">
              Prefer to connect differently? Reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@ceoname.com"
                className="btn-primary-modern group inline-flex items-center justify-center"
              >
                <span>Send Email</span>
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-modern group inline-flex items-center justify-center"
              >
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
