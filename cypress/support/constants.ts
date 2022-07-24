import moment from "moment";
import { NewArticle } from "./types";

export const createArticleBody = (article: NewArticle) => {
  return {
    article: {
      title: `${moment().format("hmmss")}${article.title}`,
      description: article.description,
      body: article.body,
      tagList: article.tagList,
    },
  };
};
