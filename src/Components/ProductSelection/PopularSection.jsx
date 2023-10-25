import React from "react";
import "../../index.scss";
import "./PopularSection.scss";
// import Popular from './PopularData.js'
import img1 from "../../Images/new-pics/IMG-20230115-WA0055.jpg";
import img2 from "../../Images/new-pics/IMG-20230115-WA0014.jpg";
import img3 from "../../Images/new-pics/IMG-20230115-WA0023.jpg";
import img4 from "../../Images/new-pics/IMG-20230115-WA0039.jpg";

function PopularSection() {
  return (
    <section>
      <div className="popular">
        <div className="popular__title-box">
          <h1 className="main-header">
            Popular right now
            <span>
              <em style={{ color: "grey", fontWeight: "200" }}>Team kit</em>
            </span>
          </h1>
          <p className="main-subtitle">
            Indispensable classics ― browse our range to discover
            top-of-the-league products!
          </p>
        </div>

        <div className="popular__card-container">
          <article className="popular__card">
            <img src={img1} alt="" className="popular__card-img" />
            <div className="popular__card-box">
              <h1 className="popular__card-title">football</h1>
              <p className="popular__card-price">
                from <b>&#8358; 4000</b>
              </p>
            </div>
          </article>
          <article className="popular__card">
            <img src={img2} alt="" className="popular__card-img" />
            <div className="popular__card-box">
              <h1 className="popular__card-title">
                Training/ <br /> Travelwear
              </h1>
              <p className="popular__card-price">
                from <b>&#8358; 4000</b>
              </p>
            </div>
          </article>
          <article className="popular__card">
            <img src={img3} alt="" className="popular__card-img" />
            <div className="popular__card-box">
              <h1 className="popular__card-title">new arrivals</h1>
              <p className="popular__card-price">
                from <b>&#8358; 4000</b>
              </p>
            </div>
          </article>
          <article className="popular__card">
            <img src={img4} alt="" className="popular__card-img" />
            <div className="popular__card-box">
              <h1 className="popular__card-title">sales</h1>
              <p className="popular__card-price">
                from <b>&#8358; 4000</b>
              </p>
            </div>
          </article>
        </div>

        {/* <div className="popular__card-container">
      <div className="popular__card-box">
        {Popular.map((teams, idx) => {
          return (
            <article key={idx} className="popular__card">
              <img className="popular__card-img" src={teams.img} alt="" />
              <p className="popular__card-title">{teams.title}</p>
            </article>
          );
        })}
      </div>

      <div className="btn-container">
        <button className="see-more">See More</button>
      </div>
      </div>*/}
      </div>
    </section>
  );
}

export default PopularSection;
