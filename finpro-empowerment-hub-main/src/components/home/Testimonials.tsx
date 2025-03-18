
import React, { useState } from 'react';
import { FadeInUp, FadeIn } from '@/components/ui/Animation';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Being a member of Finpro has transformed my career trajectory. The connections I've made and insights gained through this network are invaluable.",
      name: "Sarah Johnson",
      title: "CFO, Apex Investments",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      quote: "I've been part of many professional networks, but none compare to the quality and exclusivity of Finpro. The events are world-class and the community is exceptional.",
      name: "Michael Chen",
      title: "Investment Director, Global Capital",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      id: 3,
      quote: "Finpro has opened doors I didn't even know existed in the finance world. The mentorship programs and resource library alone are worth the membership.",
      name: "Elena Rodriguez",
      title: "Financial Strategist, Horizon Partners",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute w-96 h-96 gold-gradient rounded-full opacity-10 blur-3xl -top-48 -left-48"></div>
      <div className="absolute w-80 h-80 gold-gradient rounded-full opacity-10 blur-3xl -bottom-40 -right-40"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
              <span className="text-sm font-montserrat font-medium text-finpro-gold">Testimonials</span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Members Say
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <p className="text-gray-600">
              Hear from our community about how Finpro has enriched their professional lives
              and contributed to their success in the finance industry.
            </p>
          </FadeInUp>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative z-10">
              <div className="absolute top-8 left-8 text-finpro-gold opacity-20">
                <Quote className="w-20 h-20" />
              </div>
              
              <div className="relative z-10">
                <p className="text-lg md:text-xl font-playfair italic text-gray-700 mb-8 text-balance">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-finpro-gold">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-finpro-gold hover:bg-finpro-gold hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-finpro-gold scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-finpro-gold hover:bg-finpro-gold hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
