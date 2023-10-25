import React from 'react';
import './offerP.scss';
import { StyledButton } from '../../Components/Button/StyledButton';

const OfferProductCard = ({ items }) => {
  const { id, category, image, price, title } = items;

  return (
    <article key={id} className="opCard">
      <img src={image} alt="" className="opCard-img" />
      <div className="opCard-content">
        <span className="opCard-category">Category: {category}</span>
        <h1 className="opCard-title">{title}</h1>
        <div className="opCard-box">
          <p className="opCard-price">&#8358; {price}</p>
          <StyledButton fontSize="14px">add to cart</StyledButton>
        </div>
      </div>
    </article>
  );
};

export default OfferProductCard;
