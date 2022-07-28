import { NewArticle, NewUser } from "./types";
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

export const createArticleBody = (article: NewArticle) => {
  return {
    article: {
      title: `${moment().format("hmmss")} ${article.title}`,
      description: article.description,
      body: article.body,
      tagList: article.tagList,
    },
  };
};
