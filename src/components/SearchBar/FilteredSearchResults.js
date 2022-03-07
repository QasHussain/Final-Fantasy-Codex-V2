import React from "react";
import truncateMethod from "../../assets/truncateMethod";
import "../CharacterDisplay/CharacterGrid.scss";

function FilteredSearchResults({ getCharacterInfo, filteredData }) {
  return (
    <div className="row__images">
      {filteredData.slice(0, 20).map((character) => {
        if (
          character.origin !== "Final Fantasy" &&
          character.origin !== "Final Fantasy II" &&
          character.origin !== "Final Fantasy III" &&
          character.origin !== "Final Fantasy IV" &&
          character.origin !== "Final Fantasy V" &&
          character.origin !== "Final Fantasy BE"
        ) {
          return (
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
          );
        }
      })}
    </div>
  );
}

export default FilteredSearchResults;
