import React, { useEffect, useState } from "react";
import axios from "../store/axios";
import "./Row.scss";

function Row({ fetchUrl }) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [active, setActive] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLessthan767px, setIsLessthan767px] = useState();
  const [isLessthan843px, setIsLessthan843px] = useState();

  useEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        if (!isCancelled) {
          setCharacters(request.data);
        }
        setLoading(true);
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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
        setIsLessthan767px(true);
      } else {
        setIsLessthan767px(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 843) {
        setIsLessthan843px(true);
      } else {
        setIsLessthan843px(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  console.log(info);

  const closeBtn = () => {
    setActive("");
  };

  function truncate(input) {
    if (input.length > 15) {
      return input.substring(0, 15) + "...";
    }
    return input;
  }

  function truncateRace(input) {
    if (input.length > 7) {
      return input.substring(0, 7) + "...";
    }
    return input;
  }

  return (
    <div className="row">
      {loading ? (
        ""
      ) : (
        <div className="spinnerContainer">
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="row__images">
        {characters.map((character) => (
          <span>
            <span className="row__text">
              <div className="row_textBackground">
                <p className="row__textName">{`${truncate(character.name)}`}</p>
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
                {isLessthan843px
                  ? `Race : ${truncateRace(info.race)}`
                  : `Race : ${info.race}`}
              </h2>
              <h2 className="modalStatsContainer__stat">
                {isLessthan767px ? `${info.origin}` : `Origin : ${info.origin}`}
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
  );
}

export default Row;
