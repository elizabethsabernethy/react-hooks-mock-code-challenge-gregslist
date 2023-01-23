import React from "react";

function ListingCard({listing, onDeleteListing}) {

function favoriteLisiting(event){
  if(event.target.className === "emoji-button favorite active"){
    event.target.className = "emoji-button favorite"
    event.target.textContent = '☆'
  }
  else{
    event.target.className = "emoji-button favorite active"
    event.target.textContent = '★'
  }
}

function deleteListing(){
  fetch(`http://localhost:6001/listings/${listing.id}`, {
    method: "DELETE",
  })
  .then((resp) => resp.json())
  .then(() => onDeleteListing(listing))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {true ? (
          <button onClick={favoriteLisiting} className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={deleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
