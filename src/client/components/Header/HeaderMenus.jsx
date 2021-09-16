import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { makeStyles } from "@material-ui/styles";
import { signOut } from "../../reducks/users/operations";

const useStyles = makeStyles({
  icon: {
    color: "#7597c1",
  },
});

const HeaderMenus = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <IconButton className={classes.icon} onClick={() => dispatch(push("/favarites"))}>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton className={classes.icon} onClick={() => dispatch(signOut())}>
        <MeetingRoomIcon />
      </IconButton>
    </>
  )
}

export default HeaderMenus;
