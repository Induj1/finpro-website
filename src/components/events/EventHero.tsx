
import React from 'react';
import { FadeInUp } from '@/components/ui/Animation';

const EventHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <FadeInUp>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
              <span className="text-sm font-montserrat font-medium text-finpro-red">Event Calendar</span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Upcoming Events
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <p className="text-gray-600 text-lg mb-8">
              Join us for knowledge sharing, networking, and professional growth at our upcoming FINPRO events.
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
