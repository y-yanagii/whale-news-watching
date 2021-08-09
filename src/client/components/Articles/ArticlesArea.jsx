import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { ArticleBigArea, ArticleMiddleArea, ArticleSmallArea } from "./index";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const useStyles = makeStyles((theme) => ({
  // 種別
  types: {
    borderBottom: "solid 3px #7597c1",
    [theme.breakpoints.down("md")]: {
      width: "17%"
    },
    [theme.breakpoints.up("md")]: {
      width: "12%"
    }
  },
  parent: {
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  bigMiddleDiv: {
    [theme.breakpoints.up("sm")]: {
      width: "75%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
  }
}));

const ArticlesArea = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const articles = props.articles;

  const articleMiddle = props.articles.slice(1, 5); // 中項目の記事要素
  const articleBig = props.articles.shift(); // 大項目の記事要素

  const goToArticleDetail = useCallback((id) => {
    // 記事詳細画面へ遷移
    dispatch(push(`/articles/${id}`));
  });

  return (
    <>
      <h2 className={classes.types}>国内</h2>
      <div className={classes.parent}>
        <div className={classes.bigMiddleDiv}>
          <div>
            {/* 大項目領域 */}
            {articleBig !== void 0 && (
              <ArticleBigArea
                id={articleBig.id} urlToImage={articleBig.urlToImage} author={articleBig.author} title={articleBig.title}
                description={articleBig.description} url={articleBig.url}
                content={articleBig.content} publishedAt={articleBig.publishedAt}
                showDetail={goToArticleDetail}
              />
            )}
            {articleBig === void 0 && (<CircularProgress disableShrink />)}
          </div>
          {/* 中項目領域 */}
          <div>
            <Grid container spacing={3}>
              {articleMiddle.map((article) => (
                <ArticleMiddleArea
                  key={article.id} urlToImage={article.urlToImage} author={article.author}
                  title={article.title} description={article.description} url={article.url}
                  content={article.content} publishedAt={article.publishedAt}
                  showDetail={goToArticleDetail}
                />
              ))}
            </Grid>
            {articleMiddle === void 0 && (<CircularProgress disableShrink />)}
          </div>
        </div>
        <div>
          {/* 小項目領域 */}
          <div>
            <List>
              {articles.map((article) => (
                <ArticleSmallArea
                  key={article.id} urlToImage={article.urlToImage} author={article.author}
                  title={article.title} description={article.description} url={article.url}
                  content={article.content} publishedAt={article.publishedAt}
                  showDetail={goToArticleDetail}
                />
              ))}
            </List>
          </div>
        </div>
      </div>
    </>
  )
}

ArticlesArea.propTypes = {
  articles: PropTypes.array
}

export default ArticlesArea;
