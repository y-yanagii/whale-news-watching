import React, { useEffect, useState } from "react";

const Articles = () => {

  const [articles, setArticles] = useState({});

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
    await fetch("/api/articles").then((response) => {
      console.log(response);
      setArticles(response);
    });
  }

  // componentDidMountと同等
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <h1>記事一覧</h1>
      <div>{articles}</div>
    </>
  )
}

export default Articles;