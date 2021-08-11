import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  favoriteRoot: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "130px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30%"
    }
  }
}));

const Favorites = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.favoriteRoot}>
        <div>Favorite</div>
      </Container>
    </>
  );
}

export default Favorites;