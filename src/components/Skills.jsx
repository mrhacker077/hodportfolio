import React from "react";
import java from "../java.png";
import python from "../python.jpeg";
import mongoDB from "../mongodb.jpg";
import express from "../express.png";
import reactjs from "../reactjs.png";
import nodejs from "../node.png";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      description:
        "A NoSQL database for scalable applications with flexible JSON-like data storage.",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      description:
        "A web framework for Node.js to build APIs and web apps efficiently.",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description:
        "A JavaScript library for building user interfaces with reusable components.",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      description:
        "A runtime environment for server-side JavaScript with non-blocking I/O.",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      description:
        "A versatile language for web development, data science, and automation.",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      description:
        "A platform-independent language for secure, robust applications.",
    },
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 my-5"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-blue-200"
              key={id}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
