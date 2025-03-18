
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Events from '@/components/home/Events';
import Testimonials from '@/components/home/Testimonials';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import { ArrowRight, BookOpen } from 'lucide-react';

const Index = () => {
  // Mock featured blog posts
  const featuredBlogs = [
    {
      id: 1,
      title: 'The Future of Sustainable Investing in 2024',
      excerpt: 'Explore how ESG investing is reshaping the financial landscape and creating new opportunities for forward-thinking investors.',
      author: 'Sarah Johnson',
      date: 'June 10, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Blockchain Technology: Reshaping Financial Services',
      excerpt: 'An in-depth look at how blockchain is disrupting traditional finance and creating new paradigms for transactions and assets.',
      author: 'David Kim',
      date: 'May 3, 2024',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Events />
      
      {/* Gallery Showcase Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
                <span className="text-sm font-montserrat font-medium text-finpro-gold">Member Gallery</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Capturing Our Community
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Browse through moments from our exclusive events and see the Finpro
                community in action. Building connections that last a lifetime.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <FadeIn delay={100}>
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gallery image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gallery image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gallery image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596819502516-aa0b7312168d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gallery image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </FadeIn>
          </div>
          
          <div className="text-center">
            <FadeIn>
              <Link to="/gallery">
                <Button variant="outline" className="group">
                  View Full Gallery
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Blog Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
                <span className="text-sm font-montserrat font-medium text-finpro-gold">Latest Insights</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Expert Financial Insights
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Stay informed with the latest financial trends, market analysis, and expert 
                advice from our community of financial professionals.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {featuredBlogs.map((blog, index) => (
              <FadeInUp key={blog.id} delay={100 * (index + 1)}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-finpro-gold uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-finpro-gold">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs text-gray-500 mt-auto mb-3">
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <span>By {blog.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blogs/${blog.id}`} 
                      className="inline-flex items-center text-sm text-finpro-gold font-semibold group-hover:underline"
                    >
                      Read Article
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          <div className="text-center">
            <FadeIn>
              <Link to="/blogs">
                <Button 
                  variant="outline" 
                  className="group"
                  icon={<BookOpen className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Browse All Articles
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
