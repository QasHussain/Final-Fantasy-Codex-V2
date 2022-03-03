import React, { useEffect, useState } from "react";
import axios from "../store/axios";
import "./Row.scss";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ fetchUrl }) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [active, setActive] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        if (!isCancelled) {
          setCharacters(request.data);
        }
      } catch (e) {
        if (!isCancelled) {
          setCharacters(e.message);
        }
      }
    }

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [fetchUrl]);

  const getCharacterInfo = (character) => {
    setActive("true");

    const characterInfo = {
      name: character.name,
      age: character.age,
      height: character.height,
      job: character.job,
      race: character.race,
      origin: character.origin,
      description: character.description,
      portrait: character.pictures[0]?.url,
      gender: character.gender,
    };
    setInfo(characterInfo);
  };

  const closeBtn = () => {
    setActive("");
  };

  function truncate(input) {
    if (input.length > 12) {
      return input.substring(0, 12) + "...";
    }
    return input;
  }

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = characters.filter((value) => {
      return value.name.toUpperCase().includes(searchWord.toUpperCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
      setActive("");
    } else {
      setFilteredData(newFilter);
    }
  };
  console.log(characters);
  return (
    <div className="row">
      <div className="searchContainer">
        <p className="searchContainer__text">Search Character</p>
        <div className="searchBar">
          <input
            className="searchBar__bar"
            type="text"
            onChange={handleFilter}
          />
          <div className="searchBar__searchIcon">
            <SearchIcon />
          </div>
        </div>

        {filteredData.length !== 0 && (
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
                        <p className="row__textName">{`${truncate(
                          character.name
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
        )}

        {active === "true" && (
          <div className="modalBackground" onClick={closeBtn}>
            <div className="modalContainer">
              <div className="modalTitleContainer">
                <h1 className="modalTitleContainer__name">{info.name}</h1>
              </div>
              <div className="modalBtnContainer">
                <p className="modalBtnContainer__btn" onClick={closeBtn}>
                  x
                </p>
              </div>
              <div className="modalImageContainer">
                <img
                  className="modalImageContainer__image"
                  src={info.portrait}
                  alt={info.name}
                />
              </div>
              <section className="modalStatsContainer">
                <h2 className="modalStatsContainer__stat">Age : {info.age}</h2>
                <h2 className="modalStatsContainer__stat">
                  Gender : {info.gender}
                </h2>
                <h2 className="modalStatsContainer__stat">
                  Height : {info.height}
                </h2>
                <h2 className="modalStatsContainer__stat">
                  {`Job : ${truncate(info.job)}`}
                </h2>
                <h2 className="modalStatsContainer__stat">
                  Race : {info.race}
                </h2>
                <h2 className="modalStatsContainer__stat">
                  Origin : {info.origin}
                </h2>
              </section>
              <div className="modalDescriptionContainer">
                <p className="modalDescriptionContainer__description">
                  {info.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;