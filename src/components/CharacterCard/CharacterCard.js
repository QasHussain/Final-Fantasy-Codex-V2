import React, { useState, useEffect } from "react";

import Cloud from "../../assets/images/Cloud.png";
import Tifa3 from "../../assets/images/Tifa3.png";
import Yuna from "../../assets/images/Yuna.png";
import Aerith from "../../assets/images/Aerith.png";
import Barrett from "../../assets/images/Barrett.png";
import Tifa2 from "../../assets/images/Tifa2.png";

function CharacterCard(props) {
  const [image, setImage] = useState();

  const IMAGES = [Aerith, Barrett, Tifa2, Cloud, Tifa3, Yuna];

  useEffect(() => {
    const rdnmImage = () => {
      setImage(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
    };

    rdnmImage();
  }, []);

  console.log(image);

  return (
    <div
      className="background__image"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 50px",
        objectFit: "contain",
      }}
    >
      {props.children}
    </div>
  );
}

export default CharacterCard;