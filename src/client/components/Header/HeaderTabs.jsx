import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles({
  tabs: {
    flexGrow: 1,
  }
});

const HeaderTabs = () => {
  const classes = useStyles();
  const [type, setType] = useState();

  const changeType = (event, newType) => {
    console.log()
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
        <Tab icon={<LocationOnIcon />} label="JAPAN" />
        <Tab icon={<PublicIcon />} label="WORLD" />
        <Tab icon={<PlayCircleOutlineIcon />} label="MOVIE" />
      </Tabs>
    </>
  )
}

export default HeaderTabs;