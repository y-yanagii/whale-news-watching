import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  field: {
    minWidth: "150px",
    "& > label": {
      color: "#7597c1"
    },
    "& > div": {
      color: "#7597c1",
      "& > fieldset": {
        borderColor: "#7597c1",
      },
    },
  }
}));

const SearchTextInput = (props) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.field}
      id="outlined-secondary"
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      variant={props.variant}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

SearchTextInput.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string
}

export default SearchTextInput;
