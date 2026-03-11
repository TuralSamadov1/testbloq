export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
}
