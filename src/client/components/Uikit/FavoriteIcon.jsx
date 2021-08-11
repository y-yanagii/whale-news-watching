import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  iconPosition: {
    position: "inherit",
    bottom: 0,
    textAlign: "right"
  },
  icon: {
    color: "#7597c1"
  }
});

const FavoriteIcon = (props) => {
  const classes = useStyles();

  const id = props.id;

  const favoriteToggle = (id) => {
    // お気に入り登録、解除のトグル処理
    console.log(`${id}: トグル処理`);
  }

  return (
    <div className={classes.iconPosition} onClick={favoriteToggle(id)}>
      <IconButton className={classes.icon}>
        <FavoriteBorderIcon />
      </IconButton>
    </div>
  )
}

FavoriteIcon.propTypes = {
  id: PropTypes.number
}

export default FavoriteIcon;

// Uikitとして作る
// 親divの右下にボーダーのハートマーク見える？
// 押下したらお気に入り登録処理（解除処理）も引数でもらう←トグル？
// 押下したら色塗りつぶす処理必要
// 右下だとスモール領域見づらい？