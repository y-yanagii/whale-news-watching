import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { FavoriteIcon } from "../Uikit";

const useStyles = makeStyles({
  list: {
    width: "85%",
    border: "solid 1px #7597c1",
    backgroundColor: "black",
    color: "white",
    margin: "0 0 2.5% auto",
    borderRadius: "4px",
    cursor: "pointer",
    paddingLeft: 0,
    "&:hover": {
      backgroundColor: "#2f2f2f",
    }
  },
  listIcon: {
    borderLeft: "solid 1px #7597c1",
    paddingLeft: "16px"
  },
  image: {
    borderRadius: 6,
    display: "block",
    width: "110px",
    height: "70px"
  },
  listText: {
    padding: "0 3%"
  }
});

const ArticleSmallArea = (props) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.list} onClick={() => props.showDetail(props.id)}>
      <ListItemText
        primary={props.title}
        className={classes.listText}
      />
      <ListItemAvatar>
        <div className={classes.listIcon}>
          <img src={props.urlToImage} className={classes.image} alt="" />
        </div>
      </ListItemAvatar>
      <FavoriteIcon id={props.id} />
    </ListItem>
  )
}

// propsの型チェック
ArticleSmallArea.propTypes = {
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

export default ArticleSmallArea;