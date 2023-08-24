import React from 'react';
import Typical from 'react-typical';

export default function Home() {
  return (
    <div className="flex h-screen relative">
      <img src="./images/home.jpg" alt="nature" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-5xl font-agdasima font-bold">
        <h1>Hi I'm Smithy</h1>
        <p>
          I am a{' '}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'Software Engineer',
              3000,
              'Freelancer',
              2500,
              'Developer',
              2500,
              'Sales Engineer',
              2300,
              'Husband',
              2300,
            ]}
          />
        </p>
      </div>
    </div>
  );
}

