import React from "react";
import "../../index.scss";
import "./shopBy.scss";
import p1 from "./sport-Img/badminton.png";
import p2 from "./sport-Img/fitness.png";
import p3 from "./sport-Img/football.webp";
import p4 from "./sport-Img/gym.png";
import p5 from "./sport-Img/running.webp";
import p6 from "./sport-Img/table-tennis.png";
import p7 from "./sport-Img/basketball.png";

const ShopBy = () => {
  return (
    <div className="shopby">
      <h1 className="main-header">
        shop by
        <span>
          <em style={{ color: "grey", fontWeight: "200" }}>sport</em>
        </span>
      </h1>
      <div className="shopby-img-container">
        <article>
          <img src={p1} alt={p1} />
          <p className="shopby_link">badminton</p>
        </article>
        <article>
          <img src={p2} alt={p1} />
          <p className="shopby_link">fitness</p>
        </article>
        <article>
          <img src={p3} alt={p1} />
          <p className="shopby_link">football</p>
        </article>
        <article>
          <img src={p4} alt={p1} />
          <p className="shopby_link">gym</p>
        </article>
        <article>
          <img src={p5} alt={p1} />
          <p className="shopby_link">running</p>
        </article>
        <article>
          <img src={p6} alt={p1} />
          <p className="shopby_link">table tennis</p>
        </article>
        <article>
          <img src={p7} alt={p1} />
          <p className="shopby_link">basketball</p>
        </article>
      </div>
    </div>
  );
};

export default ShopBy;
