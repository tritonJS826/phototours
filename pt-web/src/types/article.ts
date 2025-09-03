export type ArticleSummary = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  coverUrl: string;
  alt?: string | null;
  author?: string | null;
  featured: boolean;
  publishedAt: string;
};

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  alt?: string | null;
  author?: string | null;
  featured: boolean;
  publishedAt: string;
};
