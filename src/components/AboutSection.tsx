import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
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

  const skills = [
    "Product Strategy",
    "UX Research", 
    "Data Analysis",
    "Growth Hacking",
    "User Testing",
    "Prototype Design"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-warm-orange mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 reveal">
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                I'm a passionate product professional who bridges the gap between user needs 
                and business objectives. With a keen eye for detail and a data-driven mindset, 
                I transform complex challenges into intuitive digital experiences.
              </p>
              
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                My approach combines rigorous user research, strategic thinking, and 
                iterative design to create products that not only meet user expectations 
                but exceed them. I believe in the power of empathy-driven design and 
                metrics-backed decisions.
              </p>

              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                When I'm not diving deep into user behavior analytics or sketching 
                new product flows, you'll find me exploring the latest design trends 
                and product methodologies that push the boundaries of user experience.
              </p>
            </div>

            {/* Skills */}
            <div className="reveal">
              <h3 className="text-2xl font-heading font-semibold mb-8">
                Core Expertise
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="skill" 
                    className="text-center py-3 text-sm"
                    style={{ 
                      animationDelay: `${index * 0.1}s` 
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-warm-orange">5+</div>
                  <div className="text-sm font-body text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-warm-orange">20+</div>
                  <div className="text-sm font-body text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-warm-orange">95%</div>
                  <div className="text-sm font-body text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;