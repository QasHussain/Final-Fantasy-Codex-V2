import React, { useEffect, useState } from "react";
import Moogle2 from "../../assets/Moogle2.png";
import "./Footer.scss";

function Footer({ scrollUp }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 650) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div onClick={scrollUp} className={`footer ${show && "footer__show"}`}>
      <img className="moogle" src={Moogle2} />
      <div className="textBox">
        <p className="text">Click here to scroll back to the top!</p>
      </div>
    </div>
  );
}

export default Footer;
