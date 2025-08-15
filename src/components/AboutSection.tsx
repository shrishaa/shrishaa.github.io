const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground">
            About
          </h2>
          
          <div className="space-y-8 text-lg font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              I'm a passionate product professional who bridges the gap between user needs 
              and business objectives. With a keen eye for detail and a data-driven mindset, 
              I transform complex challenges into intuitive digital experiences.
            </p>
            
            <p>
              My approach combines rigorous user research, strategic thinking, and 
              iterative design to create products that not only meet user expectations 
              but exceed them. I believe in the power of empathy-driven design and 
              metrics-backed decisions.
            </p>

            <p>
              Currently working with teams to enhance user experiences through 
              data-led insights and strategic product thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;