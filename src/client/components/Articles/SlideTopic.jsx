import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  // 画像
  media: {
    height: 422,
    backgroundColor: "#fff",
    overflow: "hidden",
    position: "relative",
    transition: ".3s",
    cursor: "pointer"
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
    width: "95%",
    height: "20%",
    fontSize: "25px",
    fontWeight: 200,
    transition: ".3s",
    cursor: "pointer"
  }
});

// トピックスのスライド領域コンポーネント
const SlideTopic = (props) => {
  const classes = useStyles();

  const articles = props.slideArticles;

  return (
    <>
      {/* スライド用ライブラリ */}
      <Carousel
        autoPlay={true}
      >
        {articles.map((article, i) => (
          <Paper key={i}>
            <Card
              onClick={() => { console.log(article) }}
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
      </Carousel>
    </>
  )
}

// propsの型チェック
SlideTopic.propTypes = {
  slideArticles: PropTypes.array
};

export default SlideTopic;