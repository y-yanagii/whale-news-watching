import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  textField: {
    "& > label": {
      color: "#7597c1"
    },
    "& > div": {
      color: "#7597c1",
      "& > fieldset": {
        borderColor: "#7597c1",
      },
    },
  },
})

const TextInputOutline = (props) => {
  const classes = useStyles();

  return (
    <TextField
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      variant="outlined"
      className={classes.textField}
    />
  )
}

TextInputOutline.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
}

export default TextInputOutline;