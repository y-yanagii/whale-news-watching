import React from "react";
import PropTypes from "prop-types";

const ArticleBigArea = (props) => {

  return (
    <>
      <div>
        <img src={ props.urlToImage } alt="" />
        <p>{ props.author }</p>
        <p>{ props.description }</p>
        <div>{ props.url }</div>
        <p>{ props.content }</p>
        <p>{ props.publishedAt }</p>
      </div>
    </>
  )
}

ArticleBigArea.propTypes = {
  urlToImage: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string,
  publishedAt: PropTypes.string
}

export default ArticleBigArea;