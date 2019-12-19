import React from "react";
import _ from "lodash";

const Favourites = props => {
  let favMeals = JSON.parse(localStorage.getItem("favourites")) || [];

  // make sure that there is no duplicate
  let arr = [];
  let category = [];
  props.fav.map(el => {
    arr.push(el.strMeal);
    category = _.uniq(arr);
    return category;
  });
  // if user refreshes website, pick favourites from local storage
  return favMeals === undefined
    ? category.map(el => {
        return (
          <option onClick={el => props.favMeal(el)} value={el}>
            {el}
          </option>
        );
      })
    : favMeals.map(el => {
        return (
          <option onClick={el => props.favMeal(el)} value={el}>
            {el}
          </option>
        );
      });
};

export default Favourites;
