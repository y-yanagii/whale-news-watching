import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import WavesIcon from "@material-ui/icons/Waves";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles({
  tabs: {
    flexGrow: 1,
  },
  icon: {
    color: "#7597c1"
  }
});

const HeaderTabs = () => {
  const classes = useStyles();
  const [type, setType] = useState();

  const changeType = (event, newType) => {
    // newTypeは順番に0,1,2が取得できる
    setType(newType);
  }

  return (
    <>
      <Tabs
        className={classes.tabs}
        value={type}
        onChange={changeType}
        variant="fullWidth"
        indicatorColor="primary"
      >
        <Tab className={classes.icon} icon={<WavesIcon />} label="ALL" />
        <Tab className={classes.icon} icon={<LocationOnIcon />} label="JAPAN" />
        <Tab className={classes.icon} icon={<PublicIcon />} label="WORLD" />
        <Tab className={classes.icon} icon={<PlayCircleOutlineIcon />} label="MOVIE" />
      </Tabs>
    </>
  )
}

export default HeaderTabs;