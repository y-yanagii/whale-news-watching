import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  detailArea: {
    marginTop: "130px"
  }
}));

const ArticleDetail = () => {
  console.log("aaaaaa");
  const classes = useStyles();
  const location = useLocation();
  const id = location.pathname.split("/articles/")[1]; // :id部分をURLから取得
  const [article, setArticle] = useState(null);
  
  useEffect(() => {
    console.log("useEffect");
    // 記事情報取得
    fetch("/api/articles/" + "1")
    .then(res => res.json())
    .then((data) => {
      setArticle(data);
    });
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <div className={classes.detailArea}>
          { article && (
            <div>{article.title}</div>
          )}
          <div>aaaaaaaaaaaaaa</div>
        </div>
      </Container>
    </>
  )
}

export default ArticleDetail;