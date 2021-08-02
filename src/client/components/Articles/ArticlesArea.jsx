import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ArticleBigArea, ArticleMiddleArea, ArticleSmallArea } from "./index";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";


const useStyles = makeStyles((theme) => ({
  // 種別
  types: {
    borderBottom: "solid 3px #7597c1",
    [theme.breakpoints.down("md")]: {
      width: "17%"
    },
    [theme.breakpoints.up("md")]: {
      width: "7%"
    }
  }
}));

const ArticlesArea = (props) => {
  const classes = useStyles();
  const articles = props.articles;

  const articleMiddle = props.articles.slice(1, 4); // 中項目の記事要素
  const articleBig = props.articles.shift(); // 大項目の記事要素
  
  console.log(articleBig);
  console.log(articleMiddle);
  console.log("articleBig");

  return (
    <Container maxWidth="md">
      <div>
        <h2 className={classes.types}>国内</h2>
        {/* 大項目領域 */}
        {articleBig !== void 0 && (
          <ArticleBigArea
            urlToImage={articleBig.urlToImage} author={articleBig.author} title={articleBig.title}
            description={articleBig.description} url={articleBig.url}
            content={articleBig.content} publishedAt={articleBig.publishedAt}
          />
        )}
        {articleBig === void 0 && (<CircularProgress disableShrink />)}
      </div>
      {/* 中項目領域 */}
      <div>
        <Grid container spacing={3}>
          {articleMiddle.map((article, i) => (
            <ArticleMiddleArea
              key={i} urlToImage={articleBig.urlToImage} author={articleBig.author}
              title={articleBig.title} description={articleBig.description} url={articleBig.url}
              content={articleBig.content} publishedAt={articleBig.publishedAt}
            />
          ))}
        </Grid>
        {articleMiddle === void 0 && (<CircularProgress disableShrink />)}
      </div>
      {/* 小項目領域 */}
      <div>
        <List>
          {articles.map((article, i) => (
            <ArticleSmallArea
              key={i} urlToImage={articleBig.urlToImage} author={articleBig.author}
              title={articleBig.title} description={articleBig.description} url={articleBig.url}
              content={articleBig.content} publishedAt={articleBig.publishedAt}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

ArticlesArea.propTypes = {
  articles: PropTypes.array
}

export default ArticlesArea;
