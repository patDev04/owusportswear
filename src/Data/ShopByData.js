import React from 'react';
import { BiFootball, BiBasketball } from 'react-icons/bi';
import { GiBoxingGloveSurprise, GiRunningShoe } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';

const ShopbySport = [
  {
    title: 'Football',
    icon: <BiFootball />,
    url: '/',
  },
  {
    title: 'Basketball',
    icon: <BiBasketball />,
    url: '/',
  },
  {
    title: 'Boxing',
    icon: <GiBoxingGloveSurprise />,
    url: '/',
  },
  {
    title: 'Track & Field',
    icon: <GiRunningShoe />,
    url: '/',
  },
  {
    title: 'Gym',
    icon: <CgGym />,
    url: '/',
  },
];

export default ShopbySport;
