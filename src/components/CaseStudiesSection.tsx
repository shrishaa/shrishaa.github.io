import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Lightbulb } from "lucide-react";

const CaseStudiesSection = () => {
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

  const caseStudies = [
    {
      title: "E-commerce Conversion Optimization",
      problem: "Low conversion rates on product pages",
      solution: "Redesigned checkout flow with trust signals",
      result: "34% increase in conversions",
      icon: TrendingUp,
      color: "bg-green-500",
      metrics: [
        { label: "Conversion Rate", value: "+34%" },
        { label: "Cart Abandonment", value: "-22%" },
        { label: "Revenue", value: "+$2.4M" }
      ]
    },
    {
      title: "SaaS Onboarding Redesign", 
      problem: "High user drop-off during onboarding",
      solution: "Progressive disclosure with interactive tutorials",
      result: "58% reduction in time-to-value",
      icon: Users,
      color: "bg-blue-500",
      metrics: [
        { label: "Completion Rate", value: "+58%" },
        { label: "Support Tickets", value: "-41%" },
        { label: "User Activation", value: "+67%" }
      ]
    },
    {
      title: "Mobile App Retention Strategy",
      problem: "Poor 30-day user retention rates", 
      solution: "Personalized push notifications & gamification",
      result: "2.3x improvement in retention",
      icon: Target,
      color: "bg-purple-500",
      metrics: [
        { label: "30-day Retention", value: "+130%" },
        { label: "Daily Active Users", value: "+89%" },
        { label: "Session Duration", value: "+45%" }
      ]
    }
  ];

  return (
    <section id="case-studies" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Case Studies
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            Deep dives into complex product challenges and the strategic solutions 
            that delivered measurable business impact.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.title}
              className={`card-hover bg-card border-0 overflow-hidden reveal`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8 p-8">
                {/* Problem & Solution */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${study.color}`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold mb-2">
                        {study.title}
                      </h3>
                      <Badge variant="outline" className="mb-4">
                        Case Study
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <h4 className="font-heading font-medium text-sm uppercase tracking-wide">
                          Problem
                        </h4>
                      </div>
                      <p className="text-muted-foreground font-body">
                        {study.problem}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <h4 className="font-heading font-medium text-sm uppercase tracking-wide">
                          Solution
                        </h4>
                      </div>
                      <p className="text-muted-foreground font-body">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-4 h-4 text-warm-orange" />
                      <h4 className="font-heading font-medium text-sm uppercase tracking-wide">
                        Key Result
                      </h4>
                    </div>
                    <p className="text-lg font-heading font-semibold text-warm-orange">
                      {study.result}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-6">
                  <h4 className="font-heading font-medium text-sm uppercase tracking-wide">
                    Impact Metrics
                  </h4>
                  
                  <div className="space-y-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metric.label}
                        className="flex justify-between items-center p-4 bg-muted/50 rounded-lg"
                      >
                        <span className="font-body text-sm text-muted-foreground">
                          {metric.label}
                        </span>
                        <span className="font-heading font-bold text-lg text-warm-orange">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-6">
                    Read Full Case Study
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;