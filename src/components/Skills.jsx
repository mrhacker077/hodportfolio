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
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 "data-aos="flip-right"
                  data-aos-duration="2000">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-purple-400"
              key={id}data-aos="fade-up"
                  data-aos-duration="2000"
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""data-aos="fade-up"
                  data-aos-duration="2000"
              />
              <div data-aos="fade-up"
              data-aos-duration="2000">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around"data-aos="fade-up"
                  data-aos-duration="2000">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;