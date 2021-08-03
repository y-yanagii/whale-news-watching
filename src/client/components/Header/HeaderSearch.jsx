import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { SearchTextInput } from "../Uikit";

const useStyles = makeStyles((theme) => ({
  searchField: {
    alignItems: "center",
    margin: "0 auto 0 0",
  },
}));

const HeaderSearch = () => {
  const classes = useStyles();

  const [keyword, setKeyword] = useState("");

  // キーワードインプット内書き込み時
  const inputKeyword = useCallback((event) => {
    setKeyword(event.target.value);
  }, [setKeyword]);

  return (
    <div className={classes.searchField}>
      <SearchTextInput
        fullWidth={false} label={"キーワードを入力"} multiline={false}
        required={false} rows={1} value={keyword}
        type={"text"} onChange={inputKeyword} variant={"outlined"}
      />
    </div>
  )
}

export default HeaderSearch;