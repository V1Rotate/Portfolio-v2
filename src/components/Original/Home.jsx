import React from 'react';
import Photo from '../../assets/olegImg.png';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div
      name='home'
      className='w-full h-screen text-[#3a4152] flex justify-center items-center relative'
    >
      <div className='flex flex-col xl:flex-row max-w-[1600px] ml-24 '>
        <div className='flex items-center justify-center mr-10 mb-10 hover:scale-105 duration-1000 lg:w-[350px] md:w-[300px] sm:w-[250px] w-[150px] ml-10'>
          <img src={Photo} alt='Oleg pic' className='rounded-full ' />
        </div>
        <div className=' flex flex-col justify-center xl:w-[800px] lg:w-[750px] sm:w-[660px] w-[480px] ml-3 pl-4'>
          <h1 className='mb-3 text-2xl font-bold sm:text-4xl md:text-5xl xl:text-6xl'>
            Hi, I'm <span className='text-[#6077cb]'>Oleg Yadroshnikov</span>
          </h1>
          <h2 className='mb-2 text-2xl font-bold md:text-5xl'>
            Software Developer
          </h2>
          <p className=' text-sm sm:text-md  md:text-lg mb-6 w-[300px] sm:w-[640px] text-justify'>
            I am focused on developing responsive front-end web applications
            with back-end technologies integration that exceed users
            expectations.
          </p>

          <div>
            <Link
              to='projects'
              className='relative inline-block text-lg cursor-pointer group'
              smooth={true}
              duration={500}
            >
              <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#3c4153] transition-colors duration-500 ease-out border-2 border-[#6077cb] rounded-lg group-hover:text-white '>
                <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-500 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#6077cb] group-hover:-rotate-180 ease'></span>
                <span className='relative animate-pulse'>Projects</span>
              </span>
              <span
                className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-300 ease-linear bg-[#6077cb] rounded-lg group-hover:mb-0 group-hover:mr-0'
                data-rounded='rounded-lg'
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
