import React, { useState } from "react";

function Search({handleFilterListing}) {

  const [filteredListing, setFilteredListing] = useState('');

  function handleFilteredChange(event){
    setFilteredListing(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFilterListing(filteredListing)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={handleFilteredChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
