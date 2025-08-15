import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Eye } from "lucide-react";

const ProjectsSection = () => {
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

  const projects = [
    {
      title: "Meetup UX Enhancement",
      description: "Redesigned the event discovery flow, increasing user engagement by 40% and reducing bounce rate by 25%.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["UX Research", "Prototyping", "A/B Testing"],
      metrics: "+40% Engagement",
      type: "UX Enhancement"
    },
    {
      title: "Notion AI Integration",
      description: "Led the pilot program for AI-powered content suggestions, resulting in 60% faster content creation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["Product Strategy", "AI Integration", "User Testing"],
      metrics: "+60% Efficiency",
      type: "Product Innovation"
    },
    {
      title: "5AM Club Mobile App",
      description: "Designed and launched a habit-tracking app with gamification elements, achieving 4.8 App Store rating.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tags: ["Mobile Design", "Gamification", "Behavioral Psychology"],
      metrics: "4.8★ Rating",
      type: "Mobile App"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my most impactful work, showcasing data-driven 
            design solutions and user-centered innovation.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group card-hover bg-card border-0 overflow-hidden reveal`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="glass" size="sm" className="gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </Button>
                </div>

                {/* Project type badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="premium" className="text-xs">
                    {project.type}
                  </Badge>
                </div>

                {/* Metrics badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="skill" className="text-xs font-bold">
                    {project.metrics}
                  </Badge>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-heading font-semibold group-hover:text-warm-orange transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-warm-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <p className="text-muted-foreground font-body leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <Button variant="premium" size="lg" className="gap-2">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;