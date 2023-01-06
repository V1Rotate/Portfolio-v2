import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxImg from '../../assets/parallax/Parallax.jpg';
import Contact from '../../components/Original/Contact';
import Navbar from '../Original/Navbar';

function ParallaxContact() {
  return (
    <Parallax
      blur={{ min: -5, max: 15 }}
      bgImage={ParallaxImg}
      className='w-full h-full'
      strength={800}
    >
      <Navbar />
      <Contact />
    </Parallax>
  );
}

export default ParallaxContact;
