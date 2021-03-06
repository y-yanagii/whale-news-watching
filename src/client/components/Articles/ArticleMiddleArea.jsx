import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FavoriteIcon } from "../Uikit";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "288px",
    margin: "5% 1.5% -2% 1%",
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "black",
    border: "solid 1px #7597c1",
    "&:hover": {
      backgroundColor: "#2f2f2f",
    }
  },
  // 画像
  media: {
    height: 200,
    backgroundColor: "#fff",
    overflow: "hidden",
    position: "relative",
    transition: ".3s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1,1.1)",
      transition: "1s all"
    }
  },
  cardContent: {
    textAlign: "left",
    borderTop: "1px solid #EAEAEA",
    color: "#fff",
    width: "95%",
    height: "65px",
    minHeight: "52px",
    bottom: 0,
    cursor: "pointer",
    margin: 0,
    padding: "15px 0px 15px 15px",
    fontSize: "25px",
    transition: ".3s",
    fontWeight: 200,
    backgroundColor: "#666666",
  },
  articleTitle: {
    display: "-webkit-box",
    overflow: "hidden",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical"
  }
}));

const ArticleMiddleArea = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Card
        onClick={() => props.showDetail(props.id)}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.urlToImage}
            title={props.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom component="p" className={classes.articleTitle}>
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <FavoriteIcon id={props.id} />
    </Paper>
  )
}

// propsの型チェック
ArticleMiddleArea.propTypes = {
  id: PropTypes.number,
  urlToImage: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string,
  publishedAt: PropTypes.string,
  showDetail: PropTypes.func
}

export default ArticleMiddleArea;
