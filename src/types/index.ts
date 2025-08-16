export interface Publication {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug: string;
}

export interface HomeContent {
  name: string;
  bio: string;
  image: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface User {
  username: string;
  isAuthenticated: boolean;
}