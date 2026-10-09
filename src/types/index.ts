export interface ProjectItem {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  tagline: string;
  highlightMetric: string;
  metricLabel: string;
  description: string;
  features: string[];
  category: 'artesanal' | 'smash' | 'dark-kitchen' | 'delivery';
  colorTheme: string;
  mockMenu: {
    name: string;
    description: string;
    price: string;
    tag?: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  restaurant: string;
  location: string;
  quote: string;
  outcome: string;
  metric: string;
  avatarInitials: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  benefit: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  restaurantName: string;
  whatsapp: string;
  city: string;
  instagramOrMenu: string;
  urgency: string;
  goal: string;
  notes: string;
}
