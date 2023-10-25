import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './products.scss';
import useFetch from '../../Components/Utils/useFetch';
import OfferProductCard from '../../Components/OfferProducts/OfferProductCard';

const Products = () => {
  const catId = parseInt(useParams()).id;
  const [maxPrice, setMaxPrice] = useState(200);

  console.log(catId);

  const { data } = useFetch('https://fakestoreapi.com/products/categories');
  const { data: products } = useFetch('https://fakestoreapi.com/products');

  return (
    <div className="products">
      <div className="products-left">
        <div className="products-filterItems">
          <h2 className="products-filter">filter</h2>

          <h2 className="products-filterTitle">categories</h2>
          {data?.map((categories, idx) => (
            <div key={idx} className="products-inputItems">
              <input
                className="products-input"
                type="checkbox"
                id="1"
                value={categories}
              />
              <label className="products-label" htmlFor="1">
                {categories}
              </label>
            </div>
          ))}
        </div>

        <div className="products-filterItems">
          <h2 className="products-filterTitle">Price</h2>
          <div className="range">
            <span>&#8358;0</span>

            <input
              type="range"
              min={0}
              max={200}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>&#8358;{maxPrice}</span>
          </div>
        </div>

        <div className="products-filterItems">
          <h2 className="products-filterTitle">color</h2>
          <div className="filter-color">
            <div className="products-inputItems">
              <input className="products-input" type="radio" id="white" />
            </div>
            <div className="products-inputItems">
              <input className="products-input" type="radio" id="black" />
            </div>
            <div className="products-inputItems">
              <input className="products-input" type="radio" id="red" />
            </div>

            <div className="products-inputItems">
              <input className="products-input" type="radio" id="blue" />
            </div>

            <div className="products-inputItems">
              <input className="products-input" type="radio" id="blue" />
            </div>
            <div className="products-inputItems">
              <input className="products-input" type="radio" id="blue" />
            </div>
          </div>
        </div>

        <div className="products-filterItems">
          <h2 className="products-filterTitle">sport</h2>
        </div>
      </div>

      <div className="products-right">
        <div className="products-header">
          <h1 className="products-catergoryHeader">
            Catergory
            <span className="products-length">{products?.length} products</span>
          </h1>
          <div className="products-sort">
            <label className="products-label" htmlFor="cars">
              sort
            </label>
            <select id="cars">
              <option value="volvo">lowest price</option>
              <option value="saab">higest price</option>
            </select>
          </div>
        </div>

        <div className="products-categoryContainer">
          {products?.map((product) => (
            <OfferProductCard key={product.id} items={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
