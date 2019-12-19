import React from "react";

import Favourites from "./Favourites";

const FavouritesMeals = props => {
  //need to fix defaultValue error in console
  return (
    <select value={props.value} onChange={e => props.handleFav(e.target.value)}>
      <option disabled selected hidden>
        Favourites
      </option>

      <Favourites fav={props.favMeals} handleFav={props.handleFav} />
    </select>
  );
};

export default FavouritesMeals;
