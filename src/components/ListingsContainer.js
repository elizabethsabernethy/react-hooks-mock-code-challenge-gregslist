import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing}) {

  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=> {
          return <ListingCard onDeleteListing={onDeleteListing} key={listing.id} listing={listing}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
