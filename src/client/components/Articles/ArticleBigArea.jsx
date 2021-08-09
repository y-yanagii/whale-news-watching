import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  articleBig: {
    padding: theme.spacing(2),
    backgroundColor: "black",
    border: "solid 1px #7597c1",
    marginTop: "8px"
  },
  media: {
    [theme.breakpoints.up("sm")]: {
      height: 350,
    },
    [theme.breakpoints.down("sm")]: {
      height: 175,
    },
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
    height: "20%",
    [theme.breakpoints.up("sm")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
    fontWeight: 200,
    transition: ".3s",
    cursor: "pointer"
  }
}))

const ArticleBigArea = (props) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.articleBig}>
        <Card
          onClick={() => props.showDetail(props.id)}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.urlToImage}
              title={props.title}
            />
            <p className={classes.title}>{props.title}</p>
          </CardActionArea>
        </Card>
      </Paper>
    </>
  )
}

ArticleBigArea.propTypes = {
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

export default ArticleBigArea;