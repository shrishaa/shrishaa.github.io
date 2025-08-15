import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Meetup UX Enhancement",
      description: "Redesigned event discovery flow, increasing user engagement by 40% and reducing bounce rate by 25%.",
      year: "2024",
      link: "#"
    },
    {
      title: "Notion AI Integration",
      description: "Led pilot program for AI-powered content suggestions, resulting in 60% faster content creation.",
      year: "2023",
      link: "#"
    },
    {
      title: "5AM Club Mobile App",
      description: "Designed and launched habit-tracking app with gamification elements, achieving 4.8 App Store rating.",
      year: "2023",
      link: "#"
    },
    {
      title: "E-commerce Conversion Optimization",
      description: "Improved checkout flow and product discovery, leading to 35% increase in conversion rate.",
      year: "2022",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-16 text-center">
            Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="group border-none shadow-none bg-transparent hover:bg-muted/30 transition-colors duration-300 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-heading font-medium text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm font-mono text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 self-start md:self-center" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;