import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ArticleBigArea } from "./index";

const useStyles = makeStyles({
  // 種別
  types: {
    borderBottom: "solid 3px #06AED5",
    width: "7%"
  }
});

const ArticlesArea = (props) => {
  const classes = useStyles();
  const articles = props.articles;

  const articleBig = props.articles.shift(); // 大項目の記事要素
  
  console.log("articleBig");
  console.log(articleBig);
  console.log(props.articles);
  console.log("articleBig");

  return (
    <Container maxWidth="md">
      <div>
        <h2 className={classes.types}>国内</h2>
        {articleBig !== void 0 && (
          <ArticleBigArea
            urlToImage={articleBig.urlToImage} author={articleBig.author}
            description={articleBig.description} url={articleBig.url}
            content={articleBig.content} publishedAt={articleBig.publishedAt}
          />
        )}
      </div>
    </Container>
  )
}

ArticlesArea.propTypes = {
  articles: PropTypes.array
}

export default ArticlesArea;
