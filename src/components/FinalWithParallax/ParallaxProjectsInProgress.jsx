import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxImg from '../../assets/parallax/Parallax.jpg';
import ProjectsInProgress from '../Original/ProjectsInProgress';
import Navbar from '../Original/Navbar';

function ParallaxProjectsInProgress() {
  return (
    <Parallax
      blur={{ min: -5, max: 20 }}
      bgImage={ParallaxImg}
      className='w-full h-full'
      strength={800}
    >
      <Navbar />
      <ProjectsInProgress />
    </Parallax>
  );
}

export default ParallaxProjectsInProgress;
