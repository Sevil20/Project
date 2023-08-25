import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import {
  fetchSearchCard,
  setSearchQuery,
} from "../redux/reducers/cardGroupReducer";
import "../assets/css/Searchbar.scss";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";

const SearchBar: React.FC = () => {
  // const [localSearchQuery, setLocalSearchQuery] = useState("");
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector((state) => state.cardGroup);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setSearchQuery(value)); 
    dispatch(fetchSearchCard(value));
   };

  return (
    <input
      type="search"
      onChange={handleSearch || ""}
      value={searchQuery}
      className="search-input"
    ></input>
  );
};

export default SearchBar;
