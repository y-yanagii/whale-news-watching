import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "250px",
    margin: "5% 1.5%",
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#35495e"
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
      transform: "scale(1.2,1.2)",
      transition: "1s all"
    }
  },
  cardContent: {
    textAlign: "left",
    borderTop: "1px solid #EAEAEA"
  }
}));

const ArticleMiddleArea = (props) => {
  const classes = useStyles();

  return (
    <Paper key={props.key} className={classes.paper}>
      <Card
        onClick={() => console.log(props)}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.urlToImage}
            title={props.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom component="p">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  )
}

// propsの型チェック
ArticleMiddleArea.propTypes = {
  key: PropTypes.number,
  urlToImage: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string,
  publishedAt: PropTypes.string
}

export default ArticleMiddleArea;
