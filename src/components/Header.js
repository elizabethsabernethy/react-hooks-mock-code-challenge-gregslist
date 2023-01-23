import React from "react";
import Search from "./Search";

function Header({handleFilterListing}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleFilterListing={handleFilterListing}/>
    </header>
  );
}

export default Header;
