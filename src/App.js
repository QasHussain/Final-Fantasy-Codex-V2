import { useState } from "react";
import "./App.scss";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
import requests from "./store/requests";

function App() {
  const [state, setState] = useState("");
  const [homePage, setHomePage] = useState("true");

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

  return (
    <div className="App">
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

      <Row fetchUrl={requests.fetch6Characters} />
    </div>
  );
}

export default App;
