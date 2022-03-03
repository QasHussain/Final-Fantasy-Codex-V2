import React from "react";
import "./Banner.scss";
import BannerImage from "../Application Image Assets/BannerImage.jpg";

function Banner({
  setCharactersVI,
  setCharactersVII,
  setCharactersVIII,
  setCharactersIX,
  setCharactersX,
  setCharactersXII,
  setCharactersXIII,
  setCharactersXV,
}) {
  return (
    <div>
      <header className="banner">
        <img className="banner__img" src={BannerImage} alt="banner" />
      </header>
      <div className="banner__buttons">
        <button onClick={setCharactersVI} className="banner__button">
          <p className="banner__button__text">Final Fantasy VI</p>
        </button>
        <button onClick={setCharactersVII} className="banner__button">
          <p className="banner__button__text">Final Fantasy VII</p>
        </button>
        <button onClick={setCharactersVIII} className="banner__button">
          <p className="banner__button__text">Final Fantasy VIII</p>
        </button>
        <button onClick={setCharactersIX} className="banner__button">
          <p className="banner__button__text">Final Fantasy IX</p>
        </button>
        <button onClick={setCharactersX} className="banner__button">
          <p className="banner__button__text">Final Fantasy X</p>
        </button>
        <button onClick={setCharactersXII} className="banner__button">
          <p className="banner__button__text">Final Fantasy XII</p>
        </button>
        <button onClick={setCharactersXIII} className="banner__button">
          <p className="banner__button__text">Final Fantasy XIII</p>
        </button>
        <button onClick={setCharactersXV} className="banner__button">
          <p className="banner__button__text">Final Fantasy XV</p>
        </button>
      </div>
    </div>
  );
}

export default Banner;
