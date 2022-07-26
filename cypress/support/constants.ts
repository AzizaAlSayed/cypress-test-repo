import { Article, NewUser } from "./types";
import moment from "moment";

export const createUserBody = (user: NewUser) => {
  return {
    user: {
      email: `${moment().format("hmmss")}${user.email}`,
      password: user.password,
      username: `${user.username}${moment().format("hmmss")}`,
    },
  };
};

export const createArticleBody = (article: Article) => {
  return {
    article: {
      body: article.body,
      description: article.description,
      tagList: article.tagList,
      title: `${article.title} ${moment().format("hmmss")}`,
    },
  };
};
