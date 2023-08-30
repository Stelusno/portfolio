import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TiWorld } from 'react-icons/ti';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-700 text-gray-300 p-8">
      <div className="mt-1 mb-28 text-3xl lg:text-4xl font-gruppo font-bold">
        <span className="border-b border-blue-500">Projects</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="The Melting Pot"
          description={
            <>
              An innovative restaurant app offering a diverse range of culinary experiences.
              <br />
              Technologies Used: Front End (Tailwind, JavaScript, React), Back End (Express.js, Node.js) Database (MongoDB Atlas)
            </>
          }
          imageSrc="./images/melting-pot.jpg"
          link1={{
            text: 'Link 1',
            icon: <TiWorld />,
            url: 'https://themelting-pot.onrender.com/',
          }}
          link2={{
            text: 'Link 2',
            icon: <AiFillGithub />,
            url: 'https://github.com/Stelusno/project-4',
          }}
        />
        <ProjectCard
          title="Beyond The Glo'"
          description={
            <>
              A full-stack web application allowing users to easily navigate, find products, and manage their cart for checkout.
              <br />
              Technologies Used: Front End (HTML, CSS, JavaScript), Back End (Node.js, Express) Database (MongoDB Atlas)
            </>
          }
          imageSrc="./images/beyond.jpg"
          link1={{
            text: 'Link 1',
            icon: <TiWorld />,
            url: 'https://throbbing-butterfly-5826.fly.dev/',
          }}
          link2={{
            text: 'Link 2',
            icon: <AiFillGithub />,
            url: 'https://github.com/Stelusno/project-2',
          }}
        />
        <ProjectCard
          title="Movie Collection"
          description={
            <>
              A fullstack web application that enables users to browse, find, and manage their movie collection.
              <br />
              Technologies Used: Front End (HTML, CSS, JavaScript) Back End (Python, Django), Database (PostgreSQL).
            </>
          }
          imageSrc="./images/movies.jpg"
          link1={{
            text: 'Link 1',
            icon: <TiWorld />,
            url: 'https://billowing-frog-6641.fly.dev/',
          }}
          link2={{
            text: 'Link 2',
            icon: <AiFillGithub />,
            url: 'https://github.com/Stelusno/project-3',
          }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, description, imageSrc, link1, link2 }) {
  return (
    <div className="flex bg-gray-800 rounded-lg overflow-hidden transition-all hover:bg-blue-500 hover:bg-opacity-90">
      <div className="w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform"
        />
      </div>
      <div className="w-1/2 p-6">
        <h2 className="text-xl lg:text-2xl font-bold font-gruppo mb-2 text-center">
          {title}
        </h2>
        <p className="text-base lg:text-lg text-center">{description}</p>
        <div className="mt-4 flex justify-center">
          <a href={link1.url} className="invisible">
            {link1.icon}
          </a>
          <a href={link2.url} className="invisible">
            {link2.icon}
          </a>
          <div
            className="cursor-pointer text-4xl"
            onClick={() => window.open(link1.url)}
          >
            {link1.icon}
          </div>
          <div
            className="cursor-pointer ml-4 text-4xl"
            onClick={() => window.open(link2.url)}
          >
            {link2.icon}
          </div>
        </div>
      </div>
    </div>
  );
}
