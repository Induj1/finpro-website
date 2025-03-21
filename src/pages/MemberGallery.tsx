
import React, { useState } from 'react';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Image, Search } from 'lucide-react';

type GalleryCategory = 'all' | 'events' | 'meetings' | 'workshops' | 'conferences';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'all'>;
  date: string;
};

const MemberGallery = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Annual Finance Summit 2023',
      category: 'conferences',
      date: 'June 2023'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Executive Board Meeting',
      category: 'meetings',
      date: 'July 2023'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Investment Strategy Workshop',
      category: 'workshops',
      date: 'August 2023'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1596819502516-aa0b7312168d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Networking Cocktail Reception',
      category: 'events',
      date: 'September 2023'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Annual Gala Dinner',
      category: 'events',
      date: 'October 2023'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Leadership Conference',
      category: 'conferences',
      date: 'November 2023'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Business Strategy Workshop',
      category: 'workshops',
      date: 'December 2023'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Quarterly Board Meeting',
      category: 'meetings',
      date: 'January 2024'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'New Member Welcome Reception',
      category: 'events',
      date: 'February 2024'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Team Building Retreat',
      category: 'events',
      date: 'March 2024'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Economic Forum',
      category: 'conferences',
      date: 'April 2024'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Financial Literacy Workshop',
      category: 'workshops',
      date: 'May 2024'
    }
  ];
  
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = activeCategory === 'all' || image.category === activeCategory;
    const matchesSearch = image.alt.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          image.date.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const categories: { value: GalleryCategory; label: string }[] = [
    { value: 'all', label: 'All Photos' },
    { value: 'events', label: 'Events' },
    { value: 'meetings', label: 'Meetings' },
    { value: 'workshops', label: 'Workshops' },
    { value: 'conferences', label: 'Conferences' }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
                <span className="text-sm font-montserrat font-medium text-finpro-gold">Our Community</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Member Gallery
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Browse through our collection of photos from various Finpro events, meetings, and gatherings 
                that showcase our vibrant community of finance professionals.
              </p>
            </FadeInUp>
          </div>
          
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
                  placeholder="Search gallery..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finpro-gold/50 focus:border-finpro-gold"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </FadeIn>
          
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <FadeInUp key={image.id} delay={50 * (index % 8)}>
                  <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg">{image.alt}</h3>
                      <p className="text-white/80 text-sm">{image.date}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Images Found</h3>
              <p className="text-gray-600">
                No images match your current filter criteria. Try changing your search or category.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MemberGallery;
