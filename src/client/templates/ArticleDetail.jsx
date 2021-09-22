import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { padStartWithZero } from "../lib/common";

const useStyles = makeStyles((theme) => ({
  detailArea: {
    marginTop: "130px"
  }
}));

const ArticleDetail = () => {
  console.log("記事詳細コンポーネントが読み込まれた");
  const classes = useStyles();
  const location = useLocation();
  let id = location.pathname.split("/articles")[1]; // :id部分をURLから取得
  const [article, setArticle] = useState(null); // 記事情報
  const [publishedAt, setPublishedAt] = useState(""); // 記事投稿日時

  if (id !== "") {
    // 記事情報IDが存在した場合、IDとして変数保持
    id = id.split("/")[1];
  }
  
  useEffect(() => {
    console.log("記事詳細");
    console.log(id);
    if (typeof id !== "undefined") {
      // 記事情報取得
      fetch("/api/articles/" + id)
      .then(res => res.json())
      .then((data) => {
        // 記事情報をセット
        setArticle(data);
        // published_atをyyyy/mm/dd/ hh:mmの型に変換
        let date = new Date(data.published_at);
        let formattedDate = `${date.getUTCFullYear()}/${padStartWithZero((date.getUTCMonth() + 1))}/${padStartWithZero(date.getUTCDate())} ${padStartWithZero(date.getHours())}:${padStartWithZero(date.getMinutes())}`;
        setPublishedAt(formattedDate);
      });
    }
  }, [id]);

  return (
    <>
      <Container maxWidth="lg">
        <div className={classes.detailArea}>
          { article && (
            <>
              <div>{article.title}</div>
              <div>{article.source_name}</div>
              <div>{article.author}</div>
              <div>{publishedAt}</div>
              <div>{article.description}</div>
              <div>{article.url}</div>
              <div>{article.url_to_image}</div>
            </>
          )}
        </div>
      </Container>
    </>
  )
}

export default ArticleDetail;