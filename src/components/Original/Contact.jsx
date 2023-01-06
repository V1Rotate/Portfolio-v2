import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen text-[#3a4152] flex flex-col justify-center max-w-[1300px] mx-auto pl-0 sm:pl-40'
    >
      <form
        method='POST'
        action='https://getform.io/f/a0aa24eb-d76d-4828-96cf-9ebf3111c774'
        className='flex flex-col max-w-[400px] w-full '
      >
        <div className='pb-8 pl-4 sm:mx-0 sm:pl-0'>
          <p className='text-xl sm:text-4xl font-bold inline border-b-4 border-[#3764c5] '>
            Contact
          </p>

          <p className='#3a4152 pt-4 text-sm tracking-normal sm:tracking-wider sm:text-lg '>
            <p>I am always open to conversation. </p>
          </p>
        </div>
        <div className='flex flex-col mx-auto'>
          <input
            className='bg-white p-2 rounded-md focus:outline-none w-[340px] sm:w-[460px] lg:w-[860px] text-xs sm:text-lg border-gray-400 border-2 '
            type='text'
            placeholder='Name'
            name='name'
          />
          <input
            className=' my-2 sm:my-4 p-2 bg-white border-gray-400 border-2 rounded-md focus:outline-none w-[340px] sm:w-[460px] lg:w-[860px] text-xs sm:text-lg '
            type='email'
            placeholder='Email'
            name='email'
          />
          <textarea
            className='bg-white p-2 rounded-md focus:outline-none w-[340px] sm:w-[460px] lg:w-[860px] text-xs sm:text-lg border-gray-400 border-2 '
            name='message'
            rows='10'
            placeholder='Please send me your message here or at contact@olegyadroshnikov.com'
          ></textarea>
          <div className='mt-5'>
            <button className='relative inline-block text-lg cursor-pointer group'>
              <span className='relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-[#3c4153] transition-colors duration-500 ease-out border-2 border-[#6077cb] rounded-lg group-hover:text-white '>
                <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-500 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#6077cb] group-hover:-rotate-180 ease'></span>
                <span className='relative animate-pulse'>Send message</span>
              </span>
              <span
                className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-300 ease-linear bg-[#6077cb] rounded-lg group-hover:mb-0 group-hover:mr-0'
                data-rounded='rounded-lg'
              ></span>
            </button>
          </div>
          <div className='flex mt-14 2xl:hidden'>
            <div>
              <a
                className='w-[35px] h-[35px] flex bg-[#3764c5] rounded-md justify-center items-center text-white mr-6 hover:bg-white hover:text-[#3764c5] hover:border-2 hover:border-[#3764c5] hover:-translate-x-2 duration-200'
                href='https://www.linkedin.com/in/yadroshnikov/'
                target='blank'
              >
                <FaLinkedinIn size={23} />
              </a>
            </div>
            <div>
              <a
                className='w-[35px] h-[35px] flex bg-[#25292f] rounded-md justify-center items-center text-white mr-6  hover:bg-white hover:text-[#25292f] hover:border-2 hover:border-[#25292f] hover:-translate-y-2 duration-200'
                href='https://github.com/V1Rotate'
                target='blank'
              >
                <BsGithub size={23} />
              </a>
            </div>
            <div>
              <a
                className='w-[35px] h-[35px] flex bg-[#5498f3] rounded-md justify-center items-center text-white hover:bg-white hover:text-[#5498f3] hover:border-2 hover:border-[#5498f3] hover:translate-x-2 duration-200'
                href='https://twitter.com/Olegnskyahoo'
                target='blank'
              >
                <BsTwitter size={23} />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
