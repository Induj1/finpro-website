
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

type BlogCategory = 'all' | 'investing' | 'market-analysis' | 'financial-planning' | 'technology';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, 'all'>;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Sustainable Investing in 2024',
      excerpt: 'Explore how ESG investing is reshaping the financial landscape and creating new opportunities for forward-thinking investors.',
      category: 'investing',
      author: 'Sarah Johnson',
      date: 'June 10, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Market Volatility: A Guide for Modern Investors',
      excerpt: 'Learn how to navigate market fluctuations with confidence and develop strategies that work in uncertain economic times.',
      category: 'market-analysis',
      author: 'Michael Chen',
      date: 'May 28, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Retirement Planning for Millennials: Start Early, Finish Rich',
      excerpt: 'Discover why early retirement planning is crucial for millennials and actionable steps to secure your financial future.',
      category: 'financial-planning',
      author: 'Elena Rodriguez',
      date: 'May 15, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Blockchain Technology: Reshaping Financial Services',
      excerpt: 'An in-depth look at how blockchain is disrupting traditional finance and creating new paradigms for transactions and assets.',
      category: 'technology',
      author: 'David Kim',
      date: 'May 3, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 5,
      title: 'Global Investment Opportunities: Emerging Markets in Focus',
      excerpt: 'Analysis of promising investment opportunities in emerging markets and strategies for international portfolio diversification.',
      category: 'investing',
      author: 'Sophia Williams',
      date: 'April 22, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'The Psychology of Investing: Overcoming Emotional Biases',
      excerpt: 'Understand how cognitive biases affect your investment decisions and learn techniques to make more rational financial choices.',
      category: 'financial-planning',
      author: 'Jonathan Taylor',
      date: 'April 10, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'AI and Machine Learning in Financial Analysis',
      excerpt: 'Discover how artificial intelligence is revolutionizing financial analysis and creating more accurate market predictions.',
      category: 'technology',
      author: 'Michelle Zhang',
      date: 'March 28, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'Q2 2024 Market Outlook: Trends and Predictions',
      excerpt: 'Expert analysis of current market conditions and forecasts for the second quarter of 2024 across major asset classes.',
      category: 'market-analysis',
      author: 'Robert Anderson',
      date: 'March 15, 2024',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  const categories: { value: BlogCategory; label: string }[] = [
    { value: 'all', label: 'All Articles' },
    { value: 'investing', label: 'Investing' },
    { value: 'market-analysis', label: 'Market Analysis' },
    { value: 'financial-planning', label: 'Financial Planning' },
    { value: 'technology', label: 'Technology' }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
                <span className="text-sm font-montserrat font-medium text-finpro-gold">Insights & Knowledge</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Finpro Blog
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Expert insights, industry analysis, and financial knowledge to help you make 
                informed decisions in today's complex financial landscape.
              </p>
            </FadeInUp>
          </div>
          
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredPosts.map((post, index) => (
                    <div 
                      key={post.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-finpro-gold text-white text-xs font-semibold py-1 px-3 rounded-full">
                          Featured
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="mr-4">{post.date}</span>
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 transition-colors group-hover:text-finpro-gold">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        
                        <Link to={`/blogs/${post.id}`} className="inline-flex items-center text-finpro-gold font-semibold group-hover:underline">
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          )}
          
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setActiveCategory(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.value
                        ? 'bg-finpro-gold text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              
              {/* Search Input */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finpro-gold/50 focus:border-finpro-gold"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </FadeIn>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <FadeInUp key={post.id} delay={50 * (index % 6)}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium py-1 px-2 rounded-full">
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-finpro-gold uppercase tracking-wider">
                          {post.category.split('-').join(' ')}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-finpro-gold">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-xs text-gray-500 mt-auto mb-3">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <User className="w-3.5 h-3.5 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link 
                        to={`/blogs/${post.id}`} 
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
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Articles Found</h3>
              <p className="text-gray-600">
                No articles match your current filter criteria. Try changing your search or category.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;
