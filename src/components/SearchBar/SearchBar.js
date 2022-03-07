import React, { useEffect, useState } from "react";
import axios from "../../store/axios";
import "../CharacterDisplay/CharacterGrid.scss";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "../CharacterDisplay/Modal.scss";
import FilteredSearchResults from "./FilteredSearchResults";

function SearchBar({ fetchUrl }) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [modalActive, setModalActive] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  async function fetchData() {
    let isCancelled = false;
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

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const getCharacterInfo = (character) => {
    setModalActive("true");

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
    setModalActive("");
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = characters.filter((value) => {
      return value.name.toUpperCase().includes(searchWord.toUpperCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
      setModalActive("");
    } else {
      setFilteredData(newFilter);
    }
  };

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
          <FilteredSearchResults
            getCharacterInfo={getCharacterInfo}
            filteredData={filteredData}
          />
        )}

        {modalActive === "true" && <Modal infoProp={info} close={closeBtn} />}
      </div>
    </div>
  );
}

export default SearchBar;
