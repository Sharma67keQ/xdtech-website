export interface Product {
  id: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  features: string[] | null;
  category: string | null;
  price_text: string | null;
  cover_image_url: string | null;
  published: boolean | null;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string | null;
  body: string | null;
  cover_image_url: string | null;
  tags: string[] | null;
  published: boolean | null;
  created_at: string;
}

export interface Job {
  id: string;
  title: string;
  location: string | null;
  type: string | null;
  description: string | null;
  apply_url: string | null;
  published: boolean | null;
  created_at: string;
}
