import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxImg from '../../assets/parallax/Parallax.jpg';
import Home from '../../components/Original/Home';
import Navbar from '../Original/Navbar';

function ParallaxHome() {
  return (
    <Parallax
      blur={{ min: -5, max: 15 }}
      bgImage={ParallaxImg}
      className='w-full h-full'
      strength={800}
    >
      <Navbar />
      <Home />
    </Parallax>
  );
}

export default ParallaxHome;
