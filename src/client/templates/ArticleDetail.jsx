import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { padStartWithZero } from "../lib/common";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description"

const useStyles = makeStyles((theme) => ({
  detailArea: {
    marginTop: "130px"
  },
  contentHeader: {
    background: "#242424",
    overflow: "hidden",
    position: "relative",
    minHeight: "150px",
    borderRadius: "4px"
  },
  articleImg: {
    position: "absolute",
    opacity: ".4",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    "-webkitFilter": "blur(2px)",
    transform: "scale(1.3)",
    minHeight: "200px",
    width: "100%"
  },
  headerBody: {
    position: "relative",
    display: "table",
    margin: "0 auto",
    width: "100%",
    padding: "15px 42px",
    overflow: "hidden"
  },
  imgCircle: {
    width: "120px",
    height: "120px",
    margin: "auto 20px auto auto",
    display: "table-cell",
    "-mozBackgroundSize": "cover",
    "-oBackgroundSize": "cover",
    "-webkitBackgroundSize": "cover",
    "backgroundSize": "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    "-mozBorderRadius": "50%",
    "-webkitBorderRadius": "50%",
    borderRadius: "50%"
  },
  hederContent: {
    width: "100%",
    display: "table-cell",
    verticalAlign: "top",
  },
  descriptionArea: {
    margin: "3% auto"
  },
  buttonArea: {
    margin: "2% auto",
    textAlign: "center"
  },
  button: {
    width: "60%",
    color: "white"
  }
}));

const ArticleDetail = () => {
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
    if (typeof id !== "undefined" && id !== "") {
      // 記事情報取得
      console.log("記事詳細取得");
      fetch("api/articles/" + id, {
        mode: "cors",
        credentials: "include"
      })
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
            <div className={classes.contentHeader}>
              <img src={article.url_to_image} alt={article.title} className={classes.articleImg} />
              <div className={classes.headerBody}>
                <img src={article.url_to_image} alt={article.title} className={classes.imgCircle} />
                <div className={classes.hederContent}>
                  <h1>{article.title}</h1>
                  <div>
                    <div>登録日： {publishedAt}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.descriptionArea}>
              <div>{article.description}</div>
              <div className={classes.buttonArea}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<DescriptionIcon />}
                  href={article.url}
                  rel="noreferrer"
                  target="_blank"
                >
                ...全文読む
                </Button>
              </div>
            </div>
            <div>著者： {article.author}</div>
            <div>記事のWebサイト： <a href={"https://" + article.source_name} rel="noreferrer" target="_blank">{article.source_name}</a></div>
          </>
          )}
        </div>
      </Container>
    </>
  )
}

export default ArticleDetail;