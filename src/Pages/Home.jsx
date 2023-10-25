import React from 'react';
import Landing from './../Components/Landing/Landing';
import ServiceInfo from './../Components/ServiceInfo/ServiceInfo';
import PopularSection from './../Components/ProductSelection/PopularSection';
import ShopBy from './../Components/ShopBy/ShopBy';
import AboutSection from '../Components/AboutSection/AboutSection';
import Offers from './../Components/Offers/Offers';
import Sponsor from './../Components/Sponsor/Sponsor';
import PopularSearch from '../Components/PopularSearch/PopularSearch';
import Rating from '../Components/Rating/Rating';

const Home = () => {
  return (
    <>
      <Landing />
      <ServiceInfo />
      <PopularSection />
      <ShopBy />
      <Offers />
      <PopularSearch />
      <Sponsor />
      <Rating />
      <AboutSection />
    </>
  );
};

export default Home;
