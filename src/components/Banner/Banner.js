import React from "react";
import "./Banner.scss";
import BannerImage from "../../assets/BannerImage.jpg";
import { requestArray } from "../../store/requests";

function Banner({ setGame, stateProp }) {
  return (
    <div>
      <header className="banner">
        <img className="banner__img" src={BannerImage} alt="banner" />
      </header>
      <div className="banner__buttons">
        {requestArray.map((game) => (
          <button
            onClick={() => setGame(game.id)}
            className={`${
              stateProp === game.id ? "selectedButtonClass" : ""
            } banner__button`}
          >
            <p className="banner__button__text">{game.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Banner;
