import { useId } from "react";
import propsTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = ({ searchField, searchChange }) => {
  const searchId = useId();

  return (
    <div className={css.searchBlock}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        id={searchId}
        value={searchField}
        onChange={(event) => searchChange(event.currentTarget.value)}
      ></input>
    </div>
  );
};

SearchBox.propsTypes = {
  searchField: propsTypes.string.isRequired,
  searchChange: propsTypes.func.isRequired,
};

export default SearchBox;
