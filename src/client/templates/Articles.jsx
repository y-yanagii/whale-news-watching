import React, { useEffect, useState } from "react";

const Articles = () => {

  const [articles, setArticles] = useState([]);

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
    fetch("/api/articles").then(res => {
      console.log(res.json());
    });
  }

  // componentDidMountと同等
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <h1>記事一覧</h1>
    </>
  )
}

export default Articles;