import React from "react";
import "./Menu-Item.scss";
import { withRouter } from "react-router-dom";
import heart from "./heart.svg";
import { Media } from "reactstrap";
import YouTube from "react-youtube";

class MenuItem extends React.Component {
  state = {
    toggle: false
  };
  //need to fix unique key error in console
  render() {
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
      strInstructions
    } = this.props.el;
    let accordion = "";

    if (this.state.toggle === true) {
      accordion = (
        <Media>
          <Media left href="#">
            <YouTube
              videoId={strYoutube.slice(strYoutube.length - 11)}
              opts={opts}
            />
          </Media>
          <Media body>
            <Media heading>{strMeal}</Media>
            {strInstructions}
          </Media>
        </Media>
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
              backgroundImage: `url(${strMealThumb})`
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
