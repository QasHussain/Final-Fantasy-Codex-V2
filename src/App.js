import React, { useRef, useState } from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/HomePage/Homepage";
import CharacterGrid from "./components/CharacterDisplay/CharacterGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import requests from "./store/requests";
import { requestArray } from "./store/requests";
import CharacterCard from "./components/CharacterCard/CharacterCard";

function App() {
  const [selectedGame, setSelectedGame] = useState("");
  const [homePage, setHomePage] = useState("true");

  const scrollRef = useRef();

  const setGame = (gameObject) => {
    setSelectedGame(gameObject);
    setHomePage("");
  };

  const scrollUpToBanner = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App" ref={scrollRef}>
      <Banner
        setGame={setGame}
        stateProp={selectedGame}
        requestArray={requestArray}
      />

      <CharacterCard>
        <SearchBar fetchUrl={requests.fetchCharacterSearch} />

        {homePage === "true" && <Homepage />}

        {selectedGame && (
          <CharacterGrid
            fetchUrl={requestArray[`${selectedGame}` - 1].request}
          />
        )}
      </CharacterCard>
      {homePage === "" && <Footer scrollUp={scrollUpToBanner} />}
    </div>
  );
}

export default App;
