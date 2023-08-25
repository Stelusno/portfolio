import React from 'react';

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-700 text-gray-300 p-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold font-gruppo mb-4 border-b border-blue-500 pb-2">EXPERIENCE</h2>
        <div className="mb-4">
          <p className="text-base lg:text-lg">
            <strong>Sales Engineering, Careerist</strong> - 01/2023 - 03/2023<br />
            Completed 100+ hours of Sales Engineering training, specializing in technical product demos and pre-sales technical assistance. Utilized data-driven strategies for demo presentations and proposal preparation.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base lg:text-lg">
            <strong>State Farm, Solutions Manager</strong> - 09/2019 - 03/2023<br />
            Led technical demonstrations of State Farm software to 10-15 new business opportunities weekly, resulting in a 5% sales increase and joining the President's club. Managed a team of 12, achieving three record sales years.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base lg:text-lg">
            <strong>Project Manager, Vite Walls</strong> - 05/2017 - 09/2019<br />
            Spearheaded data-driven initiatives to boost company efficiency, increasing sales profits by 10% in 4 weeks. Designed a staffing process for over 100 projects and implemented Salesforce technology solutions that reduced employee support calls by 45%.
          </p>
        </div>
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold font-gruppo mb-4 border-b border-blue-500 pb-2">EDUCATION</h2>
        <div className="mb-4">
          <p className="text-base lg:text-lg">
            <strong>General Assembly</strong> - Certification: 08/2023<br />
            Completed a rigorous 470+ hour Full-stack software engineering program, focusing on product development, MVC frameworks, and collaborative coding. Developed an impressive portfolio of projects showcasing proficiency in front-end and back-end development.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base lg:text-lg">
            <strong>Florida Atlantic University</strong> - Graduated: 05/2017<br />
            Earned a B.S. in International Business with a Minor in Computer Science.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg transition-transform hover:-translate-y-1 hover:bg-blue-700">
          <h2 className="text-xl lg:text-2xl font-bold font-gruppo mb-4">Frontend Development</h2>
          <ul className="list-disc ml-4">
            <li className="text-base lg:text-lg">HTML</li>
            <li className="text-base lg:text-lg">CSS</li>
            <li className="text-base lg:text-lg">Tailwind CSS</li>
            <li className="text-base lg:text-lg">React</li>
            <li className="text-base lg:text-lg">JavaScript</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg transition-transform hover:-translate-y-1 hover:bg-blue-700">
          <h2 className="text-xl lg:text-2xl font-bold font-gruppo mb-4">Backend Development</h2>
          <ul className="list-disc ml-4">
            <li className="text-base lg:text-lg">Python</li>
            <li className="text-base lg:text-lg">Django</li>
            <li className="text-base lg:text-lg">Node.js</li>
            <li className="text-base lg:text-lg">Express.js</li>
            <li className="text-base lg:text-lg">PostgreSQL</li>
            <li className="text-base lg:text-lg">MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
