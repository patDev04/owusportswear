import React from "react";
import "./sponsor.scss";
import "../../index.scss";
import pic from "../../Images/AWKA-UNITED4.jpg";
import pic2 from "../../Images/handball3-150x150.jpg";
import pic3 from "../../Images/slideImg6.jpg";
import pic4 from "../../Images/slideImg5.jpg";

const data = [
  {
    id: 1,
    image: pic,
    header: "owu",
    text: "We design for teams looking for the best product in practice and competition uniforms",
  },
  {
    id: 2,
    image: pic2,
    header: "owu sportwear",
    text: "We design for teams looking for the best product in practice and competition uniforms",
  },
  {
    id: 3,
    image: pic3,
    header: "4g wristband",
    text: "We believe that the right kind of sportswear can be a source of great pride for every child. ",
  },
  {
    id: 4,
    image: pic4,
    header: "wristband",
    text: "The quality of our wristbands is guaranteed and we have them stocked in varying colours and sizes",
  },
];

const Sponsor = () => {
  return (
    <section>
      <div className="sponsor">
        <div className="popular__title-box">
          <h1 className="main-header">
            paternership/
            <span>
              <em style={{ color: "grey", fontWeight: "200" }}>sponsor</em>
            </span>
          </h1>
        </div>
        <div className="sponsor-wrapper">
          {data.map((item) => (
            <article key={item.id} className="sponsor-card">
              <img src={item.image} alt="" className="sponsor-img" />
              <h1 className="sponsor-title">{item.header}</h1>
              <p className="sponsor-desc">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
