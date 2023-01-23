import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((listings) => setListings(listings))
   }, []);

   function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  function handleFilterListing(filteredListing){
   const showListings= listings.filter((listing)=>{
      return ((listing.description).toLowerCase()).match(filteredListing.toLowerCase());
    })
    setListings(showListings);
  }

  return (
    <div className="app">
      <Header handleFilterListing={handleFilterListing}/>
      <ListingsContainer onDeleteListing={handleDeleteListing} listings={listings}/>
    </div>
  );
}

export default App;
