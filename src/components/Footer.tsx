import { Linkedin, Twitter, Github, Mail, Calendar, MapPin, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-card/30 border-t border-electric-blue/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-text">
                Let's Build the Future
                <span className="text-electric-blue"> Together</span>
              </h3>
              <p className="text-secondary-text max-w-md">
                Ready to transform your vision into reality? I'm always open to discussing new opportunities, 
                strategic partnerships, and innovative projects that can make a global impact.
              </p>
            </div>
            
            {/* Quick Contact */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-electric-blue" />
                <span className="text-secondary-text">hello@ceoname.com</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-electric-blue" />
                <span className="text-secondary-text">San Francisco, CA • Remote Worldwide</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <Calendar className="w-4 h-4 text-electric-blue" />
                <span className="text-secondary-text">Available for consulting engagements</span>
              </div>
            </div>
          </div>
          
          {/* Links Column */}
          <div className="space-y-6">
            <h4 className="font-semibold text-primary-text">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Portfolio", href: "#portfolio" },
                { label: "Speaking", href: "#media" },
                { label: "About", href: "#journey" },
                { label: "Blog", href: "/blog" },
                { label: "Resources", href: "/resources" },
                { label: "Contact", href: "/contact" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-secondary-text hover:text-electric-blue transition-colors text-sm group"
                >
                  <span className="flex items-center space-x-2">
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Connect Column */}
          <div className="space-y-6">
            <h4 className="font-semibold text-primary-text">Connect</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card hover:bg-electric-blue/20 border border-electric-blue/20 hover:border-electric-blue/40 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-secondary-text group-hover:text-electric-blue transition-colors" />
                </a>
              ))}
            </div>
            
            {/* CTA */}
            <div className="pt-4">
              <a href="#schedule-call" className="btn-primary w-full text-sm inline-flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-electric-blue/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-secondary-text text-sm">
            © 2024 CEO Name. All rights reserved. • Built with passion for innovation.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="/privacy" className="text-secondary-text hover:text-electric-blue transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-secondary-text hover:text-electric-blue transition-colors">
              Terms of Service
            </a>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-secondary-text">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};