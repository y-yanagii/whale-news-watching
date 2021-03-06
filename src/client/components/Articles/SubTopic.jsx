import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const useStyles = makeStyles({
  // サブトピックスの最外側要素
  paper: {
    marginBottom: "2px"
  },
  // 画像
  media: {
    height: 210,
    backgroundColor: "#fff",
    overflow: "hidden",
    position: "relative",
    transition: ".3s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2,1.2)",
      transition: "1s all"
    }
  },
  // タイトル
  title: {
    textOverflow: "ellipsis",
    position: "absolute",
    margin: 0,
    bottom: 0,
    padding: "15px",
    backgroundColor: "#000",
    color: "#fff",
    opacity: ".6",
    width: "100%",
    height: "15%",
    fontSize: "12.5px",
    fontWeight: 200,
    transition: ".3s",
    cursor: "pointer"
  }
})

const SubTopic = (props) => {
  const classes = useStyles();

  const subArticles = props.subArticles;
  const dispatch = useDispatch();

  const goToArticleDetail = useCallback((id) => {
    // 記事詳細画面へ遷移
    console.log("aaa");
    dispatch(push(`/articles/${id}`));
  });

  return (
    <>
      {subArticles.map((article, i) => (
        <Paper key={i} className={classes.paper}>
          <Card
            onClick={() => goToArticleDetail(article.id)}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={article.urlToImage}
                title={article.title}
              />
              <p className={classes.title}>{article.title}</p>
            </CardActionArea>
          </Card>
        </Paper>
      ))}
    </>
  )
}

SubTopic.propTypes = {
  subArticles: PropTypes.array
}

export default SubTopic;