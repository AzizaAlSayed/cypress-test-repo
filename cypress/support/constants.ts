import moment from "moment";
import { Comment, NewArticle, NewUser } from "./types";

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
      title: article.title,
      description: article.description,
      body: article.body,
      tagList: article.tagList,
    },
  };
};

export const createCommentBody = (comment: Comment) => {
  return {
    comment: {
      body: comment.body,
    },
  };
};
