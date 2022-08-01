export interface NewUser {
  email: string;
  password: string;
  username: string;
}

export interface NewUserResponseBody {
  bio: string;
  email: string;
  image: string;
  token: string;
  username: string;
}

export interface NewArticle {
  body: string;
  description: string;
  tagList?: string[];
  title: string;
}

export interface ArticleResponseBody {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export interface AllArticlesByAuthorResponse {
  articles: ArticleResponseBody[];
  articlesCount: number;
}
