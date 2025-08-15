import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageCircle, Calendar } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "For project inquiries and collaborations",
      action: "hello@shrishaa.com",
      href: "mailto:hello@shrishaa.com",
      color: "bg-blue-500"
    },
    {
      icon: Linkedin,
      title: "Connect on LinkedIn",
      description: "Let's connect professionally",
      action: "View Profile",
      href: "https://linkedin.com",
      color: "bg-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code and projects",
      action: "View Repositories",
      href: "https://github.com",
      color: "bg-gray-800"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute discovery call",
      action: "Book Meeting",
      href: "#",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your product vision into reality? I'd love to hear 
            about your project and explore how we can create exceptional user experiences.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className={`group card-hover bg-card border-0 p-6 text-center reveal cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(method.href, '_blank')}
            >
              <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-heading font-semibold mb-2 group-hover:text-warm-orange transition-colors">
                {method.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-body mb-4">
                {method.description}
              </p>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="group-hover:border-warm-orange group-hover:text-warm-orange transition-colors"
              >
                {method.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-hero-gradient p-12 text-center text-white reveal border-0">
          <div className="max-w-2xl mx-auto space-y-6">
            <MessageCircle className="w-16 h-16 mx-auto text-warm-orange" />
            
            <h3 className="text-3xl font-heading font-bold">
              Have a Project in Mind?
            </h3>
            
            <p className="text-lg font-body text-white/90">
              Whether you're a startup looking to validate your product idea or an 
              established company seeking to enhance user experience, I'm here to help 
              you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('mailto:hello@shrishaa.com', '_blank')}
              >
                Start a Conversation
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                View My Experience
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border reveal">
          <p className="text-muted-foreground font-body">
            © 2024 Shrishaa Pathak. Crafted with passion for great design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;