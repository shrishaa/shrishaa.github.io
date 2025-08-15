const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-6xl lg:text-8xl font-heading font-bold text-foreground tracking-tight">
            Shrishaa Pathak
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Data-driven product thinker and builder who designs experiences that delight users and drive meaningful growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;