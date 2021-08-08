import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Topics, ArticlesArea } from "../components/Articles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "9%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30%"
    }
  }
}));

const Articles = () => {

  const classes = useStyles();

  const [articles, setArticles] = useState([]); // 全ての記事情報
  const [topicsArticles, setTopicsArticles] = useState([]); // トピックス領域表示する記事情報

  // News Apiより記事取得
  const getNews = async () => {
    // const url = "https://newsapi.org/v2/everything?q=クジラ&category=jp&from=2021-07-28&sortBy=publishedAt&apiKey=94694ec2cdbf458d824851f951c3dd3c";
    // try {
    //   const result = await fetch(url);
    //   const json = await result.json();
    //   console.log(json);
    // } catch(error) {
    //   console.log(error);
    //   throw error;
    // }

    // fetch("/api/articles").then(res => {
    //   console.log(res.json());
    // });
  }

  // componentDidMountと同等
  useEffect(() => {
    fetch("/api/articles")
    .then(res => res.json()) // 戻り値のjsonを受け取る
    .then((data) => {
      const newArticles = [];
      // 最新の記事情報取得
      data.forEach((article) => {
        newArticles.push({
          id: article.id,
          sourceName: article.source_name,
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.url_to_image,
          publishedAt: article.published_at,
          content: article.content,
          articleType: article.article_type,
          createdAt: article.created_at,
          updatedAt: article.updated_at
        });
      });
      
      // 全ての記事情報取得
      setArticles((prevArticles) => [...prevArticles, ...newArticles]); // 受け取ったjson戻り値をセット
      // topics分の記事情報を絞る
      // 最初の５件取得
      setTopicsArticles(prevTopicsArticles => [...prevTopicsArticles, ...newArticles.slice(0, 5)]);
    });
    console.log("123456789");
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Topics
          slideArticles={topicsArticles.slice(0, 3)}
          subTopicArticles={topicsArticles.slice(3, 5)}
        />
        <ArticlesArea
          articles={articles}
        />
      </Container>
    </>
  )
}

export default Articles;