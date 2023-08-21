import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../redux/store/store";
import '../assets/css/Searchbar.scss';
import { useParams } from "react-router-dom";
import Loader from "./Loader";



const Searchbar: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const dispatch = useDispatch<AppDispatch>();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Arama sorgusunu store'a gönder
    dispatch(setSearchQuery(searchQuery));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <>
      <div id="cover">
        <form onSubmit={handleSubmit} role="search">
          <label htmlFor="search">Search for stuff</label>
          <input
            id="search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            required
          />
        </form>
      </div>

    </>
  );
};

export default Searchbar;
