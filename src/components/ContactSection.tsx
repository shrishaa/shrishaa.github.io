import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground">
            Contact
          </h2>
          
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in working together or have a project in mind? 
            I'd love to hear from you and discuss how we can create something amazing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <a 
              href="mailto:hello@shrishaa.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-body">hello@shrishaa.com</span>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-body">LinkedIn</span>
            </a>
          </div>

          <div className="pt-16 mt-16 border-t border-border">
            <p className="text-sm text-muted-foreground font-body">
              © 2024 Shrishaa Pathak
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;