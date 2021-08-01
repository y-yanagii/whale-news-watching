import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Topics } from "../components/Articles"

const Articles = () => {

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
    fetch("/api/")
    .then(res => res.json()) // 戻り値のjsonを受け取る
    .then((data) => {
      const newArticles = [];
      // 最新の記事情報取得
      data.forEach((article) => {
        newArticles.push(article);
        setArticles((prevArticles) => [...prevArticles, article]); // 受け取ったjson戻り値をセット
      });

      // topics分の記事情報を絞る
      // 最初の５件取得
      setTopicsArticles(prevTopicsArticles => [...prevTopicsArticles, ...newArticles.slice(0, 5)]);
    });
  }, []);

  return (
    <>
      <Container maxWidth="md">
        <Topics
          slideArticles={topicsArticles.slice(0, 3)}
          subTopicArticles={topicsArticles.slice(3, 5)}
        />
        <div>
          {articles.map((article, index) => (
            <div key={index}>
              <p>{ article.author }</p>
              <p>{ article.description }</p>
              <div>{ article.url }</div>
              <img src={ article.urlToImage } alt="" />
              <p>{ article.content }</p>
              <p>{ article.publishedAt }</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default Articles;