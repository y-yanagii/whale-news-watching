import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  detail: {

  }
}));

const ArticleDetail = () => {
  const classes = useStyles();
  const location = useLocation();
  const id = location.pathname.split("/articles/")[1]; // :id部分をURLから取得
  const [article, setArticle] = useState({});

  useEffect(() => {
    // 記事情報取得
    fetch("/api/articles/" + id, )
    .then(res => res.json())
    .then((data) => {
      const articleInfo = {
        id: data.id,
        sourceName: data.source_name,
        author: data.author,
        title: data.title,
        description: data.description,
        url: data.url,
        urlToImage: data.url_to_image,
        publishedAt: data.published_at,
        content: data.content,
        articleType: data.article_type,
        createdAt: data.created_at,
        updatedAt: data.updated_at
      };

      setArticle(articleInfo);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <div>{article.title}</div>
    </Container>
  )
}

export default ArticleDetail;