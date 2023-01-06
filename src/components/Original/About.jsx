import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen  text-[#3a4152] mt-8 sm:mt-0'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-xl sm:text-4xl font-bold inline border-b-4 border-[#3764c5] '>
            About
          </p>
          <p className='pt-2 pb-2 text-sm tracking-normal sm:pt-4 sm:tracking-wider sm:text-lg'>
            Who I am
          </p>
        </div>

        <div className='max-w-[1000px] w-full mt-2'>
          <div className='text-[10px] sm:text-[15px] md:text-[17px] '>
            <p className='text-justify'>
              My software development experience started long years ago with the
              completion of the Programming and Web Development fundamentals
              program at the University and developing applications for a small
              business and a project I started that time, while I was working
              full-time as a Mechanical Engineer. I have over 17 years of
              diverse experience in Mechanical Engineering, Project Management,
              Technical Sales and Marketing. I was excited to shift back to
              Software Development by completing of the 3-month intensive
              program at ComIT, Winnipeg in 2021...
            </p>
            <br />
            <p className='text-justify'>
              At the time of the recent pandemic time, I started updating my
              knowledge and skills in Software development. I was impressed by
              tons of opportunities that Javascript and other modern
              technologies provide. Completion of several additional courses
              made my passion even stronger, passion to develop more
              customer-focused applications using React.JS, Vue.JS, Typescript,
              Redux Toolkit, Node.JS, APIs, CSS, SCSS, Tailwind CSS, etc.
            </p>
            <br />
            <p className='text-justify'>
              I am an active volunteer and helped Children's organization, and
              people who are in need. I volunteered as an Event director
              assistant at HackerX in Winnipeg, in April 2022. Working in a
              HackerX team and interacting with the audience gained my
              team-working and communication skills.
            </p>
            <br />
            <p className='text-justify'>
              Outside of work, I enjoy spending time with my family and friends,
              hiking, kayaking and flying around the world in Microsoft Flight
              Simulator. My favorite hobby is repairing and modifying my cars
              which is often challenging, and requires troubleshooting strong
              skills and a creative approach to find the best solution to fix an
              issue or overcome a challenge. I like the saying "What the eyes
              fear, the hands do".
            </p>
            <br />
            <p className='text-justify'>
              I am actively looking for opportunities. I strongly believe that
              by combining my knowledge and skills, collaboration mindset and
              genuine hard-working attitude, being a doer who likes to roll up
              my sleeves and take any challenges to reach goals, I can be a
              beneficial addition to the software development team, software
              products and the company's goals.
            </p>
            <br />
            <p className='text-justify'>
              Please feel free to contact me with any questions. I would be
              happy to discuss how I can benefit your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
