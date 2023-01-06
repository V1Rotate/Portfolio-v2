import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxReverseImg from '../../assets/parallax/ParallaxReverse.jpg';
import Testimonials from '../../components/Original/Testimonials';
import Navbar from '../Original/Navbar';

function ParallaxTestimonials() {
  return (
    <Parallax
      blur={{ min: -5, max: 15 }}
      bgImage={ParallaxReverseImg}
      className='w-full h-full'
      strength={800}
    >
      <Navbar />
      <Testimonials />
    </Parallax>
  );
}

export default ParallaxTestimonials;
