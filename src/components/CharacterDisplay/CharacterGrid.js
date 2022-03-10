import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../assets/LoadingSpinner";
import axios from "../../store/axios";
import "./CharacterGrid.scss";
import Modal from "./Modal";
import CharacterGallery from "./CharacterGallery";
import { RemoveScroll } from "react-remove-scroll";

function CharacterGrid({ fetchUrl }) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [modalActive, setModalActive] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    let isCancelled = false;
    try {
      const request = await axios.get(fetchUrl);
      if (!isCancelled) {
        setCharacters(request.data);
      }
      setLoading(true);
    } catch (e) {
      if (!isCancelled) {
        setCharacters(e.message);
        return <h2>{e.message}</h2>;
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

  return (
    <div className="row">
      {loading ? "" : <LoadingSpinner />}
      <CharacterGallery
        characterProp={characters}
        getCharacterInfo={getCharacterInfo}
      />

      {modalActive === "true" && (
        <RemoveScroll>
          <Modal infoProp={info} close={closeBtn} />
        </RemoveScroll>
      )}
    </div>
  );
}

export default CharacterGrid;
