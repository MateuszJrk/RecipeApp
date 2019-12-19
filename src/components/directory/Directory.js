import React from "react";
import MenuItem from "../menu-item/Menu-Item";
import Filters from "../filters/MainFilters";
import FavouriteMeals from "../favourites/FavouriteMeals";
import "./Directory.scss";
import _ from "lodash";

class Directory extends React.Component {
  state = {
    meals: [],
    searchValue: "",
    favMeals: [],
    favMealValue: ""
  };

  componentDidMount() {
    var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({
          meals: jsonData.meals.slice(0, 10)
        });
      });
  }

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };
  // make API call for search input
  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    let searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ meals: jsonData.meals.slice(0, 10) });
      });
  };
  filterByArea = id => {
    console.log(id);
    let meals = [...this.state.meals];
    meals = meals.filter(meal => meal.strArea === id);
    this.setState({
      meals
    });
  };
  filterByCategory = id => {
    console.log(id);
    let meals = [...this.state.meals];
    meals = meals.filter(meal => meal.strCategory === id);
    this.setState({
      meals
    });
  };
  filterByTags = id => {
    console.log(id);
    let meals = [...this.state.meals];
    meals = meals.filter(meal => meal.strTags === id);
    this.setState({
      meals
    });
  };
  //make API call for picked favourite meal
  handleSearchFavouriteMeal = () =>
    this.handlePickFavourite(this.state.favMealValue);

  handlePickFavourite = inputName => {
    console.log(inputName);
    let searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ meals: jsonData.meals });
      });
  };

  addToFavs = obj => {
    let favMeals = JSON.parse(localStorage.getItem("favourites")) || [];
    favMeals = [...favMeals, obj.strMeal];
    favMeals = _.uniq(favMeals);

    localStorage.setItem("favourites", JSON.stringify(favMeals));
    this.setState({ favMeals: [...this.state.favMeals, obj] });
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Filters
            data={this.state.meals}
            filterByArea={this.filterByArea}
            filterByTags={this.filterByTags}
            filterByCategory={this.filterByCategory}
          />
        </div>
        <div className="col-8">
          <h1>Welcome to the meal search app </h1>
          <div className="row">
            <div className="col-8">
              <input
                name="text"
                type="text"
                placeholder="Search"
                onChange={event => this.handleOnChange(event)}
                value={this.state.searchValue}
              />
            </div>
            <div className="col-4">
              <FavouriteMeals
                favMeals={this.state.favMeals}
                handleFav={this.handlePickFavourite}
                value={this.state.value}
              />
            </div>
          </div>
          <div className="row justify-content-center mb-4">
            <button className="button" onClick={this.handleSearch}>
              Search
            </button>
          </div>
          <div className="directory-menu">
            {this.state.meals.map(el => {
              return <MenuItem el={el} addToFavs={this.addToFavs} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Directory;
