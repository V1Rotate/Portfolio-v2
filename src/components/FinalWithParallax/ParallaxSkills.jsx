import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxImg from '../../assets/parallax/Parallax.jpg';
import Skills from '../../components/Original/Skills';
import Navbar from '../Original/Navbar';

function ParallaxSkills() {
  return (
    <Parallax
      blur={{ min: -5, max: 15 }}
      bgImage={ParallaxImg}
      className='w-full h-full'
      strength={800}
    >
      <Navbar />
      <Skills />
    </Parallax>
  );
}

export default ParallaxSkills;
