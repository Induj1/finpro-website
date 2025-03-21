
import React from 'react';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import { Users } from 'lucide-react';
import Button from '@/components/common/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-finpro-red/30 to-transparent opacity-40"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <FadeInUp>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-finpro-red/20 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-montserrat">
                    Attend As A Member
                  </h2>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <p className="text-gray-300 mb-6 md:mb-0">
                  FINPRO members enjoy free attendance to all-day conferences, exclusive networking
                  opportunities, and priority registration for limited-capacity events.
                </p>
              </FadeInUp>
            </div>
            
            <FadeIn delay={200}>
              <Button size="lg" variant="secondary">
                Become a Member
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
