export type ArticleBlockImage = {
  type: "image";
  src: string;
  alt?: string;
};

export type ArticleBlockText = {
  type: "text";
  content: string;
};

export type ArticleBlockTitle = {
  type: "title";
  content: string;
};

export type ArticleBlockSeparator = {
  type: "separator";
};

export type ArticleBlock =
  | ArticleBlockImage
  | ArticleBlockText
  | ArticleBlockTitle
  | ArticleBlockSeparator;

export type ArticleSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverUrl: string;
  alt?: string | null;
  author?: string | null;
  featured: boolean;
  createdAt: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  alt?: string | null;
  author?: string | null;
  featured: boolean;
  createdAt: string;
  blocks?: ArticleBlock[];
};
