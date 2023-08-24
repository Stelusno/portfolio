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
    <nav className="bg-gray-800 text-white w-48 h-screen flex flex-col justify-between">
      <div className="p-4">
        <img src="" alt="Me" />
        <Link
          to="/"
          className="flex items-center mb-4 text-gray-300 hover:text-white border-b border-gray-300 pb-2"
        >
          <AiFillHome className="mr-2" />
          Home
        </Link>
        <Link
          to="/about"
          className="flex items-center mb-4 text-gray-300 hover:text-white border-b border-gray-300 pb-2"
        >
          <BiSolidUser className="mr-2" />
          About
        </Link>
        <Link
          to="/resume"
          className="flex items-center mb-4 text-gray-300 hover:text-white border-b border-gray-300 pb-2"
        >
          <PiCertificateFill className="mr-2" />
          Resume
        </Link>
        <Link
          to="/projects"
          className="flex items-center mb-4 text-gray-300 hover:text-white border-b border-gray-300 pb-2"
        >
          <BsFillBriefcaseFill className="mr-2" />
          Projects
        </Link>
      </div>
      <div className="p-4 mt-auto">
        <Link
          to="https://github.com/Stelusno"
          className="flex items-center mb-4 text-gray-300 hover:text-white"
        >
          <AiFillGithub className="mr-2" />
          GitHub
        </Link>
        <Link
          to="https://www.linkedin.com/in/smithy-telusnord"
          className="flex items-center mb-4 text-gray-300 hover:text-white"
        >
          <AiFillLinkedin className="mr-2" />
          LinkedIn
        </Link>
      </div>
      <footer className="text-center text-gray-300 mt-4">
        2023 © Smithy-Telusnord All Rights Reserved.
      </footer>
    </nav>
  );
}
