import React from "react";
import truncateMethod from "../../assets/truncateMethod";
import "./Modal.scss";

function Modal({ close, infoProp }) {
  return (
    <div className="modalBackground" onClick={close}>
      <div className="modalContainer">
        <div className="modalTitleContainer">
          <h1 className="modalTitleContainer__name">{infoProp.name}</h1>
        </div>

        <div className="modalBtnContainer">
          <p className="modalBtnContainer__btn" onClick={close}>
            x
          </p>
        </div>

        <div className="modalInfoContainer">
          <div className="modalImageContainer">
            <img
              className="modalImageContainer__image"
              src={infoProp.portrait}
              alt={infoProp.name}
            />
          </div>
          <section className="modalStatsContainer">
            <h2 className="modalStatsContainer__stat">Age : {infoProp.age}</h2>
            <h2 className="modalStatsContainer__stat">
              Gender : {infoProp.gender}
            </h2>
            <h2 className="modalStatsContainer__stat">
              Height : {infoProp.height}
            </h2>
            <h2 className="modalStatsContainer__stat">
              {`Job : ${truncateMethod(infoProp.job, 13)}`}
            </h2>
            <h2 className="modalStatsContainer__stat">
              Race : {infoProp.race}
            </h2>
            <h2 className="modalStatsContainer__stat">
              Origin : {infoProp.origin}
            </h2>
          </section>
        </div>

        <div className="modalDescriptionContainer">
          <div className="modalDescriptionContainer__outline">
            <p className="modalDescriptionContainer__description">
              {infoProp.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
