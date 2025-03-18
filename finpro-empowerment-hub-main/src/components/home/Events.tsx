
import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInUp, FadeIn } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Finance Summit',
      date: 'June 24-25, 2024',
      location: 'New York, NY',
      time: '9:00 AM - 5:00 PM',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Investment Strategies Workshop',
      date: 'July 12, 2024',
      location: 'Chicago, IL',
      time: '10:00 AM - 3:00 PM',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Emerging Markets Symposium',
      date: 'August 8, 2024',
      location: 'Miami, FL',
      time: '11:00 AM - 4:00 PM',
      image: 'https://images.unsplash.com/photo-1620662736427-c3fff752c5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="md:max-w-2xl mb-6 md:mb-0">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
                <span className="text-sm font-montserrat font-medium text-finpro-gold">Upcoming Events</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Connect at Our Exclusive Events
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Join industry experts at our premier events where innovation meets expertise.
                Network with like-minded professionals and stay ahead of industry trends.
              </p>
            </FadeInUp>
          </div>
          
          <FadeIn delay={300}>
            <Link to="/events">
              <Button variant="outline" className="group">
                View All Events
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <FadeInUp key={event.id} delay={100 * (index + 1)}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full group">
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-finpro-gold" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-finpro-gold" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-finpro-gold" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  
                  <Link to={`/events/${event.id}`}>
                    <Button className="w-full">Register Now</Button>
                  </Link>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
