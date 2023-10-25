import img from "../../Images/reconnect.jpg";
import OfferProducts from "../OfferProducts/OfferProducts";
import "./offers.scss";
import "../../index.scss";

const Offers = () => {
  return (
    <section>
      <div className="offer">
        <div className="popular__title-box">
          <h1 className="main-header">
            exciting
            <span>
              <em style={{ color: "grey", fontWeight: "200" }}>offers</em>
            </span>
          </h1>
        </div>
        <div className="offer-wrapper">
          <div className="offer-img-container">
            <img src={img} alt="img" className="offer-img" />
          </div>
          <div className="offer-product-container">
            <OfferProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
