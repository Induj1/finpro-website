
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Being a member of Finpro has transformed my career trajectory. The connections I've made and insights gained through this network are invaluable. I've secured two major roles through connections made at Finpro events.",
      name: "Sarah Johnson",
      title: "Chief Financial Officer",
      company: "Apex Investments",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      quote: "I've been part of many professional networks, but none compare to the quality and exclusivity of Finpro. The events are world-class and the community is exceptional. Every interaction has been meaningful and contributed to my growth.",
      name: "Michael Chen",
      title: "Investment Director",
      company: "Global Capital Partners",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      id: 3,
      quote: "Finpro has opened doors I didn't even know existed in the finance world. The mentorship programs and resource library alone are worth the membership. I credit my recent promotion directly to skills learned through Finpro workshops.",
      name: "Elena Rodriguez",
      title: "Financial Strategist",
      company: "Horizon Partners",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 4,
      quote: "The caliber of professionals in the Finpro network is unmatched. Every event is an opportunity to learn from the best in the industry. The relationships I've built here have become central to my professional success.",
      name: "James Wilson",
      title: "Managing Director",
      company: "Sterling Financial Group",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 5,
      quote: "Joining Finpro was the best career decision I've made. The exclusive events, quality networking, and continuing education have accelerated my career path in ways I couldn't have imagined. The ROI on membership is exceptional.",
      name: "Priya Patel",
      title: "VP of Finance",
      company: "Meridian Enterprises",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 6,
      quote: "As someone who transitioned from a different industry into finance, Finpro provided the perfect platform to build my network and knowledge base. The community is supportive, the resources are top-notch, and the opportunities are limitless.",
      name: "David Thompson",
      title: "Portfolio Manager",
      company: "Everest Asset Management",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
                <span className="text-sm font-montserrat font-medium text-finpro-gold">Member Testimonials</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                Success Stories
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600 text-lg mb-8">
                Hear directly from our members about how Finpro has helped them achieve their professional goals and advance their careers.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInUp key={testimonial.id} delay={100 * (index % 3 + 1)}>
                <div className="bg-white rounded-2xl shadow-md p-8 h-full border border-gray-100 hover:shadow-lg transition-all duration-300 relative">
                  <div className="absolute top-6 left-6 text-finpro-gold opacity-10">
                    <Quote className="w-16 h-16" />
                  </div>
                  
                  <div className="relative z-10">
                    <p className="font-playfair italic text-gray-700 mb-8">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-finpro-gold">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.title}</p>
                        <p className="text-finpro-gold text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Video Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-4 font-montserrat">
                Featured Video Testimonial
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <p className="text-gray-600">
                Watch how Finpro membership has transformed the careers of our members.
              </p>
            </FadeInUp>
          </div>
          
          <FadeIn>
            <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Video testimonial thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-20 h-20 bg-finpro-gold rounded-full flex items-center justify-center hover:bg-white hover:text-finpro-gold transition-colors duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Share Your Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-gray-100">
            <div className="absolute left-0 top-0 w-1/2 h-full bg-finpro-gold/5 rounded-r-full blur-3xl"></div>
            
            <div className="text-center relative z-10 max-w-2xl mx-auto">
              <FadeInUp>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat">
                  Share Your Finpro Story
                </h2>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <p className="text-gray-600 mb-8">
                  We'd love to hear how Finpro has impacted your professional journey. 
                  Submit your testimonial to be featured on our website and in our marketing materials.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <form className="space-y-4 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-gold"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title & Company</label>
                      <input 
                        type="text" 
                        id="title" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-gold"
                        placeholder="Your position and company"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">Your Testimonial</label>
                    <textarea 
                      id="testimonial" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-gold"
                      placeholder="Share how Finpro has impacted your career..."
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-finpro-gold text-white font-semibold rounded-md hover:bg-finpro-gold/90 transition-colors duration-300"
                    >
                      Submit Your Story
                    </button>
                  </div>
                </form>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
