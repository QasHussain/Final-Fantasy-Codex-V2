import React from "react";
import "./Homepage.scss";
import Moogle from "../Application Image Assets/Moogle.png";

function Homepage() {
  return (
    <div>
      <div className="homePage">
        <div className="textContainer">
          <p className="textContainer__text">
            Welcome to the Final Fantasy Codex! Your online encyclopedia for all
            Final Fantasy characters from 6 to 15. Select characters by each
            entry using the buttons above, or use the search bar at any time to
            find a specific character by name!
          </p>
        </div>
      </div>
      <div className="moogleContainer">
        <img className="moogleContainer__moogle" src={Moogle} />
      </div>
    </div>
  );
}

export default Homepage;
