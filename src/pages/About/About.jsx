import React from 'react';
export default function About() {
  const googleDriveLink =
    'https://docs.google.com/document/d/1PhdKC7bnkojSOQi8HbEJBkIKl3apeMnYeqTcBdKzY60/export?format=pdf';

  const handleDownload = () => {
    window.open(googleDriveLink, '_blank');
  };

  return (
      <div className="flex flex-col items-center justify-start h-screen bg-gray-700 text-gray-300 p-8">
        <div className="mt-1 mb-10 text-3xl lg:text-4xl font-gruppo font-bold">
          <span className="border-b border-dotted border-blue-500">
            About Me
          </span>
        </div>
        <p className="text-base md:text-lg lg:text-xl text-justify ">
          I am a Full Stack Software Engineer dedicated to creating accessible
          and intuitive designs. Through empathetic communication and
          simplifying complex concepts, I solve problems and make life easier
          for diverse clients and peers. My passion for advancing the world
          drives me to leverage my unique ability to empathize, communicate, and
          create meaningful software solutions, contributing to a more inclusive
          and impactful future.
        </p>
        <div className="mt-4">
          <h1 className="text-xl font-gruppo font-bold ">
            Personal Information
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-gruppo text-justify ">
            <strong>Name:</strong> Smithy Telusnord
            <br />
            <strong>Residence:</strong> Boynton Beach, FL
            <br />
            <strong>Email:</strong> stelusno@gmail.com
            <br />
            <strong>Phone:</strong> 239-692-2070
          </p>
        </div>
        <button
          onClick={handleDownload}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white text-lg lg:text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Download Resume
        </button>
      </div>
  );
}
