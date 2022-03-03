import { useRef, useState } from "react";
import "./App.scss";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Row from "./Components/Row";
import SearchBar from "./Components/SearchBar";
import requests from "./store/requests";

function App() {
  const [state, setState] = useState("");
  const [homePage, setHomePage] = useState("true");

  const scrollRef = useRef();

  const ff6Active = () => {
    setState("ff6Active");
    setHomePage("");
  };
  const ff7Active = () => {
    setState("ff7Active");
    setHomePage("");
  };
  const ff8Active = () => {
    setState("ff8Active");
    setHomePage("");
  };
  const ff9Active = () => {
    setState("ff9Active");
    setHomePage("");
  };
  const ff10Active = () => {
    setState("ff10Active");
    setHomePage("");
  };

  const ff12Active = () => {
    setState("ff12Active");
    setHomePage("");
  };

  const ff13Active = () => {
    setState("ff13Active");
    setHomePage("");
  };

  const ff15Active = () => {
    setState("ff15Active");
    setHomePage("");
  };

  const scrollUpToBanner = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App" ref={scrollRef}>
      <Banner
        setCharactersVI={ff6Active}
        setCharactersVII={ff7Active}
        setCharactersVIII={ff8Active}
        setCharactersIX={ff9Active}
        setCharactersX={ff10Active}
        setCharactersXII={ff12Active}
        setCharactersXIII={ff13Active}
        setCharactersXV={ff15Active}
      />
      <SearchBar fetchUrl={requests.fetchCharacterSearch} />

      {homePage === "true" && <Homepage />}

      {state === "ff6Active" && <Row fetchUrl={requests.fetch6Characters} />}
      {state === "ff7Active" && <Row fetchUrl={requests.fetch7Characters} />}
      {state === "ff8Active" && <Row fetchUrl={requests.fetch8Characters} />}
      {state === "ff9Active" && <Row fetchUrl={requests.fetch9Characters} />}
      {state === "ff10Active" && <Row fetchUrl={requests.fetch10Characters} />}
      {state === "ff12Active" && <Row fetchUrl={requests.fetch12Characters} />}
      {state === "ff13Active" && <Row fetchUrl={requests.fetch13Characters} />}
      {state === "ff15Active" && <Row fetchUrl={requests.fetch15Characters} />}
      {homePage === "" && <Footer scrollUp={scrollUpToBanner} />}
    </div>
  );
}

export default App;
