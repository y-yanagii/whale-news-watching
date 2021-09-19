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
  console.log("記事詳細コンポーネントが読み込まれた");
  const classes = useStyles();
  const location = useLocation();
  let id = location.pathname.split("/articles")[1]; // :id部分をURLから取得
  const [article, setArticle] = useState(null);

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
        console.log(data);
        setArticle(data);
      });
    }
  }, [id]);

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