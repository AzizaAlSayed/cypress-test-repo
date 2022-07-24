export interface NewArticle {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface NewArticleResponseBody {
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

/* export interface NewArticleResponseBody {
  articles: [
    {
      slug: string
      title: string
      description: string
      body: string
      tagList:string [];
      createdAt: string;
      updatedAt: string
      favorited: true;
      favoritesCount:number;
      author: {
        username:string
        bio: string
        image: string
        following: boolean;
      };
    }
  ];
  articlesCount: number;
}*/
