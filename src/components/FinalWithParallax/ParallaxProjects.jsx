import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxReverseImg from '../../assets/parallax/ParallaxReverse.jpg';
import Projects from '../../components/Original/Projects';
import Navbar from '../Original/Navbar';

function ParallaxProjects() {
  return (
    <Parallax
      blur={{ min: -5, max: 15 }}
      bgImage={ParallaxReverseImg}
      className='w-full h-full'
      strength={800}
    >
      <Navbar />
      <Projects />
    </Parallax>
  );
}

export default ParallaxProjects;
