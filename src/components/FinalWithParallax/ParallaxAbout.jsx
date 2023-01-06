import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxReverseImg from '../../assets/parallax/ParallaxReverse.jpg';
import About from '../../components/Original/About';
import Navbar from '../Original/Navbar';

function ParallaxAbout() {
  return (
    <Parallax
      blur={{ min: -5, max: 20 }}
      bgImage={ParallaxReverseImg}
      className='w-full h-full'
      strength={800}
    >
      <Navbar />
      <About />
    </Parallax>
  );
}

export default ParallaxAbout;
