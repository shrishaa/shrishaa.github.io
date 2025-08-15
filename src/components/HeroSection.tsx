import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement("div");
      particle.className = "absolute w-2 h-2 bg-warm-orange rounded-full opacity-60 animate-particle-float";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 8 + "s";
      particle.style.animationDuration = (8 + Math.random() * 4) + "s";

      particlesRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 12000);
    };

    const interval = setInterval(createParticle, 2000);
    
    // Create initial particles
    for (let i = 0; i < 8; i++) {
      setTimeout(createParticle, i * 500);
    }

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Animated particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="block">Shrishaa</span>
                <span className="block gradient-text">Pathak</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-heading font-medium text-white/90">
                Data-Driven Product Thinker & Builder
              </h2>
              
              <p className="text-lg lg:text-xl text-white/80 font-body max-w-xl">
                I design and refine products that delight users and drive growth, 
                turning complex problems into elegant solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View My Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex space-x-6 pt-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:hello@shrishaa.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Avatar/Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden animate-float">
                <img 
                  src={heroAvatar} 
                  alt="Shrishaa Pathak" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-warm-orange/20 to-transparent animate-glow" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-white/60 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;