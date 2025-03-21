
import React from 'react';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Button from '@/components/common/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-finpro-red/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-finpro-red/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-black/20 z-10">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Professional conference" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      <div className="container-custom z-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <FadeIn>
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Finance Professionals Network</span>
              </div>
            </FadeIn>
            
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-montserrat font-bold">
                Building Value <br /><span className="text-finpro-red">Together</span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                FINPRO has successfully transformed competition into collaboration, 
                uncovering the true value of working together!
              </p>
            </FadeInUp>
            
            <FadeInUp delay={300}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Become a Member Today
                </Button>
                <Button variant="outline" size="lg">
                  Explore Events
                </Button>
              </div>
            </FadeInUp>

            <FadeInUp delay={400}>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      style={{
                        backgroundImage: `url('https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg')`,
                        backgroundSize: 'cover'
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-montserrat text-sm">
                    <span className="font-bold text-finpro-red">90+</span> Members
                  </p>
                  <p className="text-xs text-gray-500">Join our growing community</p>
                </div>
              </div>
            </FadeInUp>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-finpro-red/20 blur-2xl rounded-full transform -translate-x-4 translate-y-4"></div>
                <div className="w-full h-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                    alt="Finance professionals networking" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-finpro-red flex items-center justify-center flex-shrink-0">
                        <span className="font-montserrat font-bold text-white">8</span>
                      </div>
                      <div>
                        <h3 className="font-montserrat font-bold text-gray-900">FINMEET Event</h3>
                        <p className="text-sm text-gray-600">February 8th, 2025 - Delhi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
