import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TiWorld } from 'react-icons/ti';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-700 text-gray-300 p-8">
      <div className="mt-1 mb-6 text-3xl lg:text-4xl font-gruppo font-bold">
        <span className="border-b border-blue-500">Projects</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="The Melting Pot"
          description="A collaborative project blending various cuisines to create unique dishes."
          imageSrc="./images/melting-pot.jpg"
          link1={{
            text: "Link 1",
            icon: <TiWorld />,
            url: "https://themelting-pot.onrender.com/"
          }}
          link2={{
            text: "Link 2",
            icon: <AiFillGithub />,
            url: "https://github.com/Stelusno/project-4"
          }}
        />
        <ProjectCard
          title="Beyond The Glo'"
          description="An exploration of outer space and distant galaxies through stunning imagery."
          imageSrc="path_to_image2.jpg"
          link1={{
            text: "Link 1",
            icon: <TiWorld />,
            url: "https://example.com"
          }}
          link2={{
            text: "Link 2",
            icon: <AiFillGithub />,
            url: "https://github.com/yourusername"
          }}
        />
        <ProjectCard
          title="Movie Collection"
          description="Coming Soon"
          imageSrc="path_to_image3.jpg"
          link1={{
            text: "Link 1",
            icon: <TiWorld />,
            url: "https://example.com"
          }}
          link2={{
            text: "Link 2",
            icon: <AiFillGithub />,
            url: "https://github.com/yourusername"
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
