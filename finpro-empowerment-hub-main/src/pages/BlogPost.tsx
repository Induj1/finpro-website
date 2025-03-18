
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FadeIn } from '@/components/ui/Animation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import Button from '@/components/common/Button';

const BlogPost = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  
  // Mock blog data - in a real app, this would be fetched from a database
  const blogPosts = [
    {
      id: "1",
      title: 'The Future of Sustainable Investing in 2024',
      content: `
        <p>Sustainable investing, also known as Environmental, Social, and Governance (ESG) investing, has evolved from a niche approach to a mainstream investment strategy. In 2024, we're seeing unprecedented growth in this sector as investors increasingly recognize that companies with strong ESG practices often deliver superior long-term financial performance.</p>
        
        <h2>Why Sustainable Investing Matters Now</h2>
        
        <p>The convergence of several global factors has accelerated the importance of sustainable investing:</p>
        
        <ul>
          <li>Climate change acceleration and related regulatory responses</li>
          <li>Growing consumer demand for ethical business practices</li>
          <li>Increased corporate transparency and accountability</li>
          <li>Generational wealth transfer to sustainability-conscious millennials</li>
        </ul>
        
        <p>According to recent market analysis, ESG-focused funds have seen inflows of over $120 billion in the past year alone, representing a 25% increase from the previous period. This growth trajectory is expected to continue as more investors align their portfolios with their values.</p>
        
        <h2>Key Trends Shaping Sustainable Investing</h2>
        
        <p>Several important trends are reshaping the sustainable investing landscape in 2024:</p>
        
        <h3>1. Standardization of ESG Reporting</h3>
        
        <p>One of the historical challenges in sustainable investing has been the lack of standardized ESG metrics and reporting frameworks. However, significant progress has been made with the International Sustainability Standards Board (ISSB) finalizing global baseline standards for sustainability-related financial disclosures. These standards are being adopted by regulatory bodies worldwide, providing investors with more consistent and comparable ESG data.</p>
        
        <h3>2. Integration of AI in ESG Analysis</h3>
        
        <p>Artificial intelligence and machine learning technologies are revolutionizing ESG analysis by processing vast amounts of unstructured data from various sources, including news reports, social media, and satellite imagery. This enables investors to identify ESG risks and opportunities that might not be apparent through traditional analysis methods.</p>
        
        <h3>3. Rise of Impact Investing</h3>
        
        <p>While ESG investing focuses on minimizing negative impacts, impact investing takes a more proactive approach by seeking to generate positive, measurable social and environmental outcomes alongside financial returns. This approach is gaining traction among institutional investors and high-net-worth individuals looking to address specific challenges such as climate change, healthcare access, and economic inequality.</p>
        
        <h2>Investment Opportunities in the Sustainable Space</h2>
        
        <p>Several sectors present compelling investment opportunities for sustainable investors:</p>
        
        <h3>Clean Energy Transition</h3>
        
        <p>The global transition to renewable energy continues to accelerate, driven by falling costs, technological innovations, and supportive policy environments. Companies involved in solar, wind, energy storage, and grid modernization offer significant growth potential.</p>
        
        <h3>Circular Economy</h3>
        
        <p>Businesses embracing circular economy principles—designing out waste, keeping materials in use, and regenerating natural systems—are positioned for long-term success as resource scarcity becomes a growing concern.</p>
        
        <h3>Sustainable Agriculture</h3>
        
        <p>Agricultural innovations focused on reducing environmental impact while increasing productivity represent an important frontier in sustainable investing, addressing challenges related to food security, water scarcity, and climate resilience.</p>
        
        <h2>Challenges and Considerations</h2>
        
        <p>Despite its growth and promise, sustainable investing faces several challenges:</p>
        
        <h3>Greenwashing Concerns</h3>
        
        <p>As demand for sustainable investments grows, so does the risk of "greenwashing"—misleading claims about the environmental benefits of products or practices. Investors need to conduct thorough due diligence to ensure that funds and companies truly adhere to the ESG principles they claim to support.</p>
        
        <h3>Performance Measurement</h3>
        
        <p>While evidence increasingly suggests that sustainable investing doesn't require sacrificing returns, measuring the financial impact of specific ESG factors remains complex. Investors should maintain realistic expectations and consider both financial and impact objectives when constructing portfolios.</p>
        
        <h2>Conclusion</h2>
        
        <p>Sustainable investing represents a fundamental shift in how we allocate capital, recognizing that financial returns and positive societal impact can be complementary rather than competing objectives. As this approach continues to evolve and mature, it offers promising opportunities for investors seeking to align their portfolios with both their financial goals and their values.</p>
        
        <p>For those looking to incorporate sustainable investing into their strategy, starting with a thoughtful assessment of personal values and investment objectives is essential. From there, working with knowledgeable advisors and leveraging high-quality ESG data can help navigate this dynamic and rewarding investment landscape.</p>
      `,
      category: 'investing',
      author: 'Sarah Johnson',
      authorTitle: 'Chief Investment Strategist',
      authorImage: 'https://randomuser.me/api/portraits/women/32.jpg',
      date: 'June 10, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Sustainable Investing', 'ESG', 'Impact Investing', 'Climate Finance']
    },
    {
      id: "2",
      title: 'Understanding Market Volatility: A Guide for Modern Investors',
      content: `
        <p>Market volatility is an inherent characteristic of financial markets, representing the degree to which asset prices fluctuate over time. While volatility often carries negative connotations, understanding its nature and developing strategies to navigate it effectively can transform market uncertainty from a source of stress into a potential opportunity.</p>
        
        <h2>The Nature of Market Volatility</h2>
        
        <p>Volatility is typically measured by the standard deviation of returns, indicating how much an asset's price deviates from its average over a specific period. Higher volatility suggests greater price swings and potential risk, while lower volatility indicates more stable price movements.</p>
        
        <p>Several factors contribute to market volatility:</p>
        
        <ul>
          <li>Economic indicators and central bank policies</li>
          <li>Geopolitical events and uncertainties</li>
          <li>Industry disruptions and technological changes</li>
          <li>Market sentiment and investor psychology</li>
          <li>Liquidity conditions and market structure</li>
        </ul>
        
        <h2>Volatility in Today's Markets</h2>
        
        <p>Recent years have seen periods of heightened volatility driven by global events such as the COVID-19 pandemic, geopolitical tensions, and significant policy shifts. The interconnectedness of global markets and the rapid spread of information through digital channels have also contributed to more pronounced market reactions.</p>
        
        <p>Additionally, the rise of algorithmic trading and passive investment strategies has introduced new dynamics to market volatility patterns, sometimes leading to faster and more dramatic price movements than in previous eras.</p>
        
        <h2>Psychological Aspects of Volatility</h2>
        
        <p>One of the greatest challenges in navigating volatile markets is managing emotional responses. Research in behavioral finance has identified several common psychological biases that can undermine investment decision-making during turbulent periods:</p>
        
        <h3>Loss Aversion</h3>
        
        <p>Investors typically feel the pain of losses more acutely than the pleasure of equivalent gains, often leading to premature selling during market downturns and missed recovery opportunities.</p>
        
        <h3>Recency Bias</h3>
        
        <p>The tendency to place greater weight on recent events can cause investors to overreact to short-term market movements and lose sight of longer-term trends and fundamentals.</p>
        
        <h3>Herd Mentality</h3>
        
        <p>During periods of market stress, the instinct to follow the crowd can be powerful, potentially leading to buying at market peaks and selling at market bottoms.</p>
        
        <h2>Strategies for Navigating Volatile Markets</h2>
        
        <p>Developing a disciplined approach to volatility management can help investors maintain perspective and potentially benefit from market fluctuations:</p>
        
        <h3>1. Adopt a Long-Term Perspective</h3>
        
        <p>Historical data consistently shows that time in the market tends to be more important than timing the market. A long-term investment horizon allows for recovery from temporary downturns and can reduce the impact of short-term volatility on overall returns.</p>
        
        <h3>2. Diversify Strategically</h3>
        
        <p>Diversification across asset classes, sectors, and geographies remains one of the most effective tools for managing volatility. Different assets often respond differently to market conditions, potentially smoothing overall portfolio performance during turbulent periods.</p>
        
        <h3>3. Consider Dollar-Cost Averaging</h3>
        
        <p>Investing fixed amounts at regular intervals can help mitigate the impact of market timing and potentially take advantage of price fluctuations by purchasing more shares when prices are lower.</p>
        
        <h3>4. Maintain Adequate Liquidity</h3>
        
        <p>Having sufficient cash reserves not only provides peace of mind during market downturns but also creates opportunities to invest at potentially attractive valuations when others are selling.</p>
        
        <h3>5. Implement Tactical Hedging Strategies</h3>
        
        <p>For sophisticated investors, techniques such as options strategies, alternative investments, or defensive sector rotations can help manage downside risk during volatile periods while maintaining exposure to potential upside.</p>
        
        <h2>When Volatility Creates Opportunity</h2>
        
        <p>Market volatility often creates disconnects between price and fundamental value, presenting opportunities for disciplined investors. Some approaches to potentially benefit from volatility include:</p>
        
        <h3>Rebalancing</h3>
        
        <p>Systematically trimming positions that have grown beyond target allocations and adding to underweighted assets can enforce a "buy low, sell high" discipline and potentially enhance long-term returns.</p>
        
        <h3>Tax-Loss Harvesting</h3>
        
        <p>Market downturns can create opportunities to realize losses for tax purposes while maintaining overall market exposure, potentially improving after-tax returns.</p>
        
        <h3>Quality at a Discount</h3>
        
        <p>Volatility sometimes allows investors to purchase high-quality assets at discounted prices when market sentiment turns negative despite sound fundamentals.</p>
        
        <h2>Conclusion</h2>
        
        <p>Market volatility, while unsettling, is an inherent feature of financial markets that presents both challenges and opportunities. By understanding the nature of volatility, managing emotional responses, and implementing disciplined strategies, investors can navigate turbulent markets with greater confidence and resilience.</p>
        
        <p>Perhaps most importantly, developing a personalised investment plan that aligns with your financial goals, risk tolerance, and time horizon provides a valuable compass during volatile periods, helping to maintain focus on long-term objectives rather than short-term market noise.</p>
      `,
      category: 'market-analysis',
      author: 'Michael Chen',
      authorTitle: 'Market Analyst',
      authorImage: 'https://randomuser.me/api/portraits/men/42.jpg',
      date: 'May 28, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Market Volatility', 'Risk Management', 'Investment Strategy', 'Behavioral Finance']
    }
  ];
  
  const post = blogPosts.find(post => post.id === blogId);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
            <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/blogs')}>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blogs
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <article className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blogs"
                className="flex items-center text-finpro-gold font-medium mb-8 hover:underline"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to All Articles
              </Link>
              
              <div className="mb-8">
                <div className="bg-finpro-gold/10 px-3 py-1 rounded-full inline-block mb-3">
                  <span className="text-sm font-medium text-finpro-gold">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ')}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>By {post.author}</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden mb-10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="flex items-start mb-8">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-12 h-12 rounded-full border-2 border-finpro-gold"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-gray-600 text-sm">{post.authorTitle}</p>
                </div>
              </div>
              
              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="border-t border-b border-gray-200 py-6 mb-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-gray-700">Tags:</span>
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={() => navigate('/blogs')}>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Articles
                </Button>
                
                <button className="flex items-center text-finpro-gold hover:text-opacity-80 transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </button>
              </div>
            </div>
          </FadeIn>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
