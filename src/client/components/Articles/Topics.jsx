import React from "react";
import Container from "@material-ui/core/Container";
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
}

export default Topics;
