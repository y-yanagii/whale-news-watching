import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  icon: {
    color: "#7597c1"
  }
})

const HeaderMenus = () => {
  const classes = useStyles();
  return (
    <>
      <IconButton className={classes.icon} onClick={() => console.log("ユーザ情報表示画面へ遷移")}>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton className={classes.icon} onClick={() => console.log("お気に入り画面へ遷移")}>
        <AccountCircleIcon />
      </IconButton>
    </>
  )
}

export default HeaderMenus;
