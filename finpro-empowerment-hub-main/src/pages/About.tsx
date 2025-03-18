
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import { Users, Star, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
                <span className="text-sm font-montserrat font-medium text-finpro-gold">About Us</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                Who We Are
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600 text-lg mb-8">
                Finpro is an exclusive network of finance professionals dedicated to excellence, 
                knowledge sharing, and creating valuable connections that transform careers.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 bg-finpro-gold/20 blur-2xl rounded-full transform -translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Finance professionals in a meeting" 
                  className="rounded-2xl shadow-lg relative z-10"
                />
              </div>
            </FadeIn>
            
            <div>
              <FadeInUp>
                <h2 className="text-3xl font-bold mb-6 font-montserrat">Our Mission & Vision</h2>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Mission</h3>
                  <p className="text-gray-600">
                    To create a premier community where finance professionals can connect, collaborate, 
                    and grow together, fostering innovation and excellence in the financial industry.
                  </p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Vision</h3>
                  <p className="text-gray-600">
                    To be the world's most influential network of finance professionals, known for 
                    cultivating leadership, driving innovation, and setting the standard for 
                    excellence in global finance.
                  </p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <Button size="lg">Join Our Community</Button>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-4 font-montserrat">Our Core Values</h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <p className="text-gray-600">
                The principles that guide our community and shape our approach to professional development.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Star className="w-8 h-8 text-finpro-gold" />, 
                title: 'Excellence', 
                description: 'Striving for the highest standards in everything we do.' 
              },
              { 
                icon: <Users className="w-8 h-8 text-finpro-gold" />, 
                title: 'Community', 
                description: 'Building meaningful connections and fostering collaboration.' 
              },
              { 
                icon: <Award className="w-8 h-8 text-finpro-gold" />, 
                title: 'Integrity', 
                description: 'Upholding ethical standards and transparency in all interactions.' 
              },
              { 
                icon: <Target className="w-8 h-8 text-finpro-gold" />, 
                title: 'Innovation', 
                description: 'Embracing forward-thinking approaches to finance.' 
              }
            ].map((value, index) => (
              <FadeInUp key={index} delay={100 * (index + 1)}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-finpro-gold/10 flex items-center justify-center mb-5 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-finpro-gold/20 to-transparent opacity-30"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-xl">
                <FadeInUp>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-montserrat">
                    Join Our Elite Network Today
                  </h2>
                </FadeInUp>
                
                <FadeInUp delay={100}>
                  <p className="text-gray-300 mb-6 md:mb-0">
                    Take the next step in your finance career by becoming part of our exclusive community 
                    of professionals committed to excellence and mutual growth.
                  </p>
                </FadeInUp>
              </div>
              
              <FadeIn delay={200}>
                <Button size="lg" className="whitespace-nowrap">
                  Become a Member
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
