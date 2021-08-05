import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Whale from "../assets/img/src/whale03.jpg";

const useStyles = makeStyles((theme) => ({
  backImage: {
    height: "calc(100vh)",
    backgroundImage: `url(${Whale})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundColor: "#284377"
  },
  content: {
    width: 300,
    paddingTop: "400px",
    fontSize: "25px"
  }
}));

const NotFound = () => {
  const classes = useStyles();
  
  return (
    <>
      <Container maxWidth="xl" className={classes.backImage}>
        <div className={classes.content}>
          Sorry Whale Not Found.
        </div>
      </Container>
    </>
  )
}

export default NotFound;