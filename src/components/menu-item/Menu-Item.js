import React from "react";
import "./Menu-Item.scss";
import { withRouter } from "react-router-dom";
import heart from "./heart.svg";
import { Media } from "reactstrap";
import YouTube from "react-youtube";

class MenuItem extends React.Component {
  state = {
    toggle: false,
    disabled: false
  };
  //need to fix unique key error in console
  //need to make other objects disabled when current active
  render() {
    // options for youtube player
    const opts = {
      height: "200",
      width: "200",
      playerVars: {
        autoplay: 0
      }
    };

    const {
      strMeal,
      strMealThumb,
      strYoutube,
      strInstructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5
    } = this.props.el;
    let accordion = "";

    if (this.state.toggle === true) {
      accordion = (
        <div className="row">
          <div className="col-4">
            <YouTube
              className="mr-2 mb-0 pb-o"
              videoId={strYoutube.slice(strYoutube.length - 11)}
              opts={opts}
            />
            <h4>Ingredients:</h4>
            <ul>
              <li>{strIngredient1}</li>
              <li>{strIngredient2}</li>
              <li>{strIngredient3}</li>
              <li>{strIngredient4}</li>
              <li>{strIngredient5}</li>
            </ul>
          </div>
          <div className="col-8">
            <h3>{strMeal}</h3>
            <p>{strInstructions}</p>
          </div>
        </div>
      );
    } else {
      accordion = "";
    }

    return (
      <>
        <div className="menu-item ">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${strMealThumb})`,
              disabled: true
            }}
            onClick={() =>
              this.setState(prevState => ({
                toggle: !prevState.toggle
              }))
            }
          />

          <div className="like">
            <button onClick={() => this.props.addToFavs(this.props.el)}>
              <div className="mr-1">{strMeal}</div>
              <img src={heart} alt="heart" />
            </button>
          </div>
        </div>
        <div className="">
          <p>{accordion}</p>
        </div>
      </>
    );
  }
}

export default withRouter(MenuItem);
