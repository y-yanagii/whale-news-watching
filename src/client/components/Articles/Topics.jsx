import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { SlideTopic, SubTopic } from "./index";

const useStyles = makeStyles((theme) => ({
  // 親領域
  topicsContainer: {
    position: "relative",
    height: "100%"
  },
  // スライド領域
  slide: {
    position: "relative",
    top: 0,
    width: "66.64%",
    height: "100%"
  },
  // サブトピックス領域
  sub: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "33.26%",
    height: "100%",
    display: "inline-block"
  }
}));

const Topics = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.topicsContainer}>
        <div className={classes.slide}>
          <SlideTopic slideArticles={props.slideArticles} />
        </div>
        <div className={classes.sub}>
          <SubTopic />
          <SubTopic />
        </div>
      </div>
    </Container>
  )
};

// propsの型チェック
Topics.propTypes = {
  slideArticles: PropTypes.array,
  subTopicArticles: PropTypes.array
};

export default Topics;
