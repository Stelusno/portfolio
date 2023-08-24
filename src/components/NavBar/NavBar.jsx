import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import { PiCertificateFill } from 'react-icons/pi';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white w-36 md:w-54 xl:w-60 h-screen flex flex-col justify-between">
    <div className="p-4">
      <div className="h-48 mb-4 relative">
        <img src="./images/me.jpg" alt="Me" className="w-full h-full object-cover" />
        <div className="absolute bottom-2 left-0 right-0 text-center bg-blue-200 bg-opacity-40 text-gray-800 py-1">
          <span className="font-ruwudu font-bold text-xl md:text-2xl lg:text-3xl">
            Smithy Telusnord
          </span>
        </div>
      </div>
      <Link
        to="/"
        className="flex items-center mb-4 text-gray-300 hover:text-white border-b border-gray-300 pb-2 font-gruppo font-bold text-base md:text-lg lg:text-xl"
      >
        <AiFillHome className="mr-2" />
        Home
      </Link>
      <Link
        to="/about"
        className="flex items-center mb-4 text-gray-300 hover:text-white border-b border-gray-300 pb-2 font-gruppo font-bold text-base md:text-lg lg:text-xl"
      >
        <BiSolidUser className="mr-2" />
        About
      </Link>
      <Link
        to="/resume"
        className="flex items-center mb-4 text-gray-300 hover:text-white border-b border-gray-300 pb-2 font-gruppo font-bold text-base md:text-lg lg:text-xl"
      >
        <PiCertificateFill className="mr-2" />
        Resume
      </Link>
      <Link
        to="/projects"
        className="flex items-center mb-4 text-gray-300 hover:text-white border-b border-gray-300 pb-2 font-gruppo font-bold text-base md:text-lg lg:text-xl"
      >
        <BsFillBriefcaseFill className="mr-2" />
        Projects
      </Link>
    </div>
    <div className="p-4 mt-auto">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="https://github.com/Stelusno"
            className="flex items-center text-gray-300 hover:text-white font-gruppo text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/smithy-telusnord"
            className="flex items-center text-gray-300 hover:text-white font-gruppo text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
);
}