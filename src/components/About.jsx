import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Personal Info Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Personal Information
          </h2>
          <p className="text-gray-700">
            Hello everyone, my name is Parashuram.D.Talawar, and I am the Head
            of the Computer Science and Engineering Department here at Karnataka Govt. Polytechnic. I was born on 28/10/1969 in Magadi, Gadag District, Karnataka.
          </p>
          <p className="mt-4 text-gray-700">
            Hobbies: Playing cricket, reading newspapers, listening to music.
          </p>
        </div>

        {/* Education Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Education & Training
          </h2>
          <p className="text-gray-700">
            I have completed BE (Computer Science & Eng) at PDA College of
            Engineering, Gulbarga, Karnataka. Currently working as Selection
            Grade Lecturer/HOD in KPT Mangalore, Karnataka.
          </p>
        </div>

        {/* Skills Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Skills & Expertise
          </h2>
          <p className="text-gray-700">
            Proficient in many programming languages, experienced with numerous
            software tools and technologies, strong grasp of design
            principles/concepts, excellent problem-solving skills, and
            effective communicator and collaborator.
          </p>
        </div>

        {/* Experience Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Professional Experience
          </h2>
          <p className="text-gray-700">
            Joined the CSE department as a lecturer in 1995 and worked for 26
            years at Government Women's Polytechnic, Bondel, Mangalore.
            Currently serving as the Head of the Computer Science and
            Engineering Department at Karnataka Govt. Polytechnic since the
            past 4 years.
          </p>
        </div>

        {/* Achievements Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Achievements & Awards
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              Best Student in Computer Science (1993) at PDA College of
              Engineering, Gulbarga.
            </li>
            <li>
              1st Place (98%) in SQL & PL/SQL Training (2006-07).
            </li>
            <li>
              1st Place in Quiz competition at NRAMP Nitte (2004).
            </li>
          </ul>
        </div>

        {/* Mission Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Mission Statement
          </h2>
          <p className="text-gray-700">
            My mission is to leverage my skills and creativity to deliver
            innovative computer science and engineering solutions that exceed
            client expectations and contribute positively to the digital
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
