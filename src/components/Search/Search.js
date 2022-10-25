import React, { useState, useContext } from "react";
import "./searchStyle.css";
import Loading from "../LoadingSpinner/Loading";
import Auth from "../../context/Auth";
import 'antd/dist/antd.css';

const Search = () => {

	const { loadingAnime, setInputValue, loading } = useContext(Auth)


  return (
    <div className="search-container">
      <input
        className="search"
        id="searchleft"
        type="text"
        placeholder="Search"
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            loadingAnime();
          }
        }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label className="button searchbutton" for="searchleft">
        {loading ? (
          <Loading />
        ) : (
          <span className="mglass" onClick={loadingAnime}>
            &#9906;
          </span>
        )}
      </label>
    </div>
  );
};

export default Search;
