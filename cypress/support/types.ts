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
  title: string;
  description: string;
  body: string;
  tagList: string[];
}
