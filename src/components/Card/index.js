import React from "react";
import "./index.css";
import tick from "../../images/tick.jpg";
import x from "../../images/x.png";

export default function Card(props) {
  const cardData = props?.props;
  return (
    <div className="card">
      <div className="cardHeader">
        <p className="cardTitle">{cardData?.title}</p>
        <p>
          <span className="cardPrice">${cardData?.price}</span>
          <span className="spanPrice">/month</span>
        </p>
      </div>
      <div className="feat">
        {cardData?.features["active"]?.map((feat) => {
          return (
            <div className="activeFeat">
              <img src={tick} alt="tick" />
              {feat}
            </div>
          );
        })}
        {cardData?.features["inactive"]?.map((feat) => {
          return (
            <div className="inactiveFeat">
              <img src={x} alt="x" />
              {feat}
            </div>
          );
        })}
      </div>
      <div className="btn">Button</div>
    </div>
  );
}
