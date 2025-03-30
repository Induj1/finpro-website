
// Event data types
export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface PastEvent {
  title: string;
  date: string;
  location: string;
  image: string;
}

// Upcoming FINMEET events
export const finmeetEvents: Event[] = [
  {
    id: 1,
    title: 'FINMEET',
    date: 'February 8, 2025',
    location: 'Delhi',
    description: 'Professional Networking & Knowledge Exchange',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'FINMEET',
    date: 'April 12, 2025',
    location: 'Delhi',
    description: 'Industry Insights & Collaboration',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'FINMEET',
    date: 'June 14, 2025',
    location: 'Bangalore',
    description: 'National Conference & Workshops',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'FINMEET - Family Outing',
    date: 'August 15-17, 2025',
    location: 'Hyderabad',
    description: 'Family Outing & Networking',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'FINMEET',
    date: 'October 11, 2025',
    location: 'Mumbai',
    description: 'National Conference',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'FINMEET',
    date: 'December 13, 2025',
    location: 'Indore',
    description: 'Professional Meet',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// Upcoming FINFLIX events
export const finflixEvents: Event[] = [
  {
    id: 7,
    title: 'FINFLIX',
    date: 'January 18, 2025',
    location: 'Online',
    description: 'Virtual Insights Session',
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'FINFLIX',
    date: 'March 8, 2025',
    location: 'Online',
    description: 'Financial Analysis & Trends',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    title: 'FINFLIX',
    date: 'May 10, 2025',
    location: 'Online',
    description: 'Financial Planning Workshop',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    title: 'FINFLIX',
    date: 'July 12, 2025',
    location: 'Online',
    description: 'Market Analysis & Predictions',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 11,
    title: 'FINFLIX',
    date: 'November 8, 2025',
    location: 'Online',
    description: 'Financial Case Studies',
    image: 'https://images.unsplash.com/photo-1554774853-719d4fc78eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// Special events
export const specialEvents: Event[] = [
  {
    id: 12,
    title: 'FINNOTSAV',
    date: 'January 9-11, 2026',
    location: 'Lonavala',
    description: 'Annual Grand Event',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// Past events
export const pastEvents: PastEvent[] = [
  {
    title: 'FINMEET',
    date: 'June 2023',
    location: 'Pune',
    image: 'https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'FINMEET',
    date: 'July 2023',
    location: 'Raipur',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'FINMEET',
    date: 'August 2023',
    location: 'Surat',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'FINMEET',
    date: 'September 2023',
    location: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'FINMEET',
    date: 'October 2023',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'FINMEET',
    date: 'December 2023',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'FINMEET',
    date: 'January 2024',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'FINNOTSAV',
    date: 'February 2024',
    location: 'Lonavala',
    image: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'FINMEET',
    date: 'April 2024',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
