


const About = () => (
  <section id="about" className="relative w-full h-[80vh] lg:h-[70vh] mb-20 flex items-center">
    {/* Background Image */}
    <img
      src="https://images.unsplash.com/photo-1574680096145-1eceaee24a07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      alt="Luxury bathroom scene"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />

    {/* Content Container */}
    <div className="relative max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20">
      {/* Text Side */}
      <div className="text-white space-y-6 animate-fadeInUp">
        <h2 className="text-4xl lg:text-5xl font-serif font-semibold">
          About VIPELO
        </h2>
        <p className="text-lg text-white/80 max-w-lg leading-relaxed">
          At VIPELO, luxury is defined by craftsmanship, precision, and timeless elegance.  
          Each fixture is thoughtfully engineered to elevate everyday rituals into memorable experiences.  
          Inspired by architectural heritage, our collection bridges form and function—designed to endure, built to inspire.
        </p>
        <ul className="space-y-2 text-white/70 list-disc list-inside">
          <li>• Precision-engineered ceramic and brass components</li>
          <li>• Hand-finished surfaces with enduring patinas</li>
          <li>• Harmonized fixtures that elevate entire spaces</li>
        </ul>
      </div>
      {/* Optional visual or leave blank */}
      {/* If you'd like an interior shot or decorative visual here, we can add it */}
    </div>
  </section>
);

export default About;
