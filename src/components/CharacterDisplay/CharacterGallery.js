import React from "react";
import "./CharacterGrid.scss";
import truncateMethod from "../../assets/truncateMethod";

function SearchResults({ characterProp, getCharacterInfo }) {
  return (
    <div className="row__images">
      {characterProp.map((character) => (
        <span>
          <span className="row__text">
            <div className="row_textBackground">
              <p className="row__textName">{`${truncateMethod(
                character.name,
                10
              )}`}</p>
            </div>
          </span>
          <img
            key={character.id}
            onClick={() => getCharacterInfo(character)}
            className="row__image"
            src={character.pictures[0]?.url}
            alt={character.name}
          />
        </span>
      ))}
    </div>
  );
}

export default SearchResults;
