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
  stateProp,
}) {
  console.log(stateProp);

  return (
    <div>
      <header className="banner">
        <img className="banner__img" src={BannerImage} alt="banner" />
      </header>
      <div className="banner__buttons">
        <button
          onClick={setCharactersVI}
          className={`${
            stateProp === "ff6Active" ? "selectedButtonClass" : ""
          } banner__button`}
        >
          <p className="banner__button__text">Final Fantasy VI</p>
        </button>
        <button
          onClick={setCharactersVII}
          className={`${
            stateProp === "ff7Active" ? "selectedButtonClass" : ""
          } banner__button`}
        >
          <p className="banner__button__text">Final Fantasy VII</p>
        </button>
        <button
          onClick={setCharactersVIII}
          className={`${
            stateProp === "ff8Active" ? "selectedButtonClass" : ""
          } banner__button`}
        >
          <p className="banner__button__text">Final Fantasy VIII</p>
        </button>
        <button
          onClick={setCharactersIX}
          className={`${
            stateProp === "ff9Active" ? "selectedButtonClass" : ""
          } banner__button`}
        >
          <p className="banner__button__text">Final Fantasy IX</p>
        </button>
        <button
          onClick={setCharactersX}
          className={`${
            stateProp === "ff10Active" ? "selectedButtonClass" : ""
          } banner__button`}
        >
          <p className="banner__button__text">Final Fantasy X</p>
        </button>
        <button
          onClick={setCharactersXII}
          className={`${
            stateProp === "ff12Active" ? "selectedButtonClass" : ""
          } banner__button`}
        >
          <p className="banner__button__text">Final Fantasy XII</p>
        </button>
        <button
          onClick={setCharactersXIII}
          className={`${
            stateProp === "ff13Active" ? "selectedButtonClass" : ""
          } banner__button`}
        >
          <p className="banner__button__text">Final Fantasy XIII</p>
        </button>
        <button
          onClick={setCharactersXV}
          className={`${
            stateProp === "ff15Active" ? "selectedButtonClass" : ""
          } banner__button`}
        >
          <p className="banner__button__text">Final Fantasy XV</p>
        </button>
      </div>
    </div>
  );
}

export default Banner;
