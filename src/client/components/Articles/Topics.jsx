import React from "react";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { SlideTopic, SubTopic } from "./index";

const Topics = (props) => {
  console.log(props.slideArticles);
  console.log(props.subTopicArticles);

  return (
    <Container maxWidth="md">
      <SlideTopic />
      <SubTopic />
      <SubTopic />
    </Container>
  )
};

// propsの型チェック
Topics.propTypes = {
  slideArticles: PropTypes.array,
  subTopicArticles: PropTypes.array
};

export default Topics;
