import React, { useState, useEffect } from "react";
import "./CharacterCard.scss";

import Cloud from "../../assets/images/Cloud.png";
import Yuna from "../../assets/images/Yuna.png";
import Aerith from "../../assets/images/Aerith.png";
import Barrett from "../../assets/images/Barrett.png";
import Tifa2 from "../../assets/images/Tifa2.png";

function CharacterCard(props) {
  const [image, setImage] = useState();

  const IMAGES = [Aerith, Barrett, Tifa2, Cloud, Yuna];

  useEffect(() => {
    const rdnmImage = () => {
      setImage(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
    };

    rdnmImage();
  }, []);

  return (
    <div
      className="background__image"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 50px",
        objectFit: "contain",
        height: "50%",
      }}
    >
      {props.children}
    </div>
  );
}

export default CharacterCard;
