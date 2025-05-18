export interface createArticleParam {
  article: {
    title: string;
    description: string;
    body: string;
    tagList?: string[];
  };
}
export interface createArticle {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
}

export interface updateArticleParam {
  article: {
    title: string;
    description: string;
    body: string;
    tagList?: string[];
    slug: string;
  };
}

export interface TagsResponse {
  tags: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
}

export interface ArticleResponse {
  article: Article;
}

export interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

export interface UserSignInParam {
  user: {
    email: string;
    password: string;
  };
}

export interface UserSignUpParam {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

export interface UserResponse {
  user: {
    email: string;
    username: string;
    bio: string | null;
    image: string;
    token: string;
  };
}
