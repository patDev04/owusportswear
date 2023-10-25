import React from "react";
import "./rating.scss";

const Rating = () => {
  return (
    <div className="rating">
      <div className="rating-wrapper">
        <div className="rating-box">
          <h1 className="rating-title"> 300</h1>
          <p className="rating-text">customers internationally</p>
        </div>
        <div className="rating-box">
          <h1 className="rating-title">4.5</h1>
          <p className="rating-text">google rating</p>
        </div>
        <div className="rating-box">
          <h1 className="rating-title">long lasting</h1>
          <p className="rating-text">colour guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
