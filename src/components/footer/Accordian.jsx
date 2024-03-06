"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { JoinUs, ReachOut, Socials } from "./Categories";
import { Row } from "./Row";

const Title = ({ name, activeIndex, index }) => {
  return (
    <Row gap={5}>
      <p className="text-white text-xl font-satoshi font-light">{name}</p>
      {activeIndex === index ? (
        <FaMinus color="white" />
      ) : (
        <FaPlus color="white" />
      )}
    </Row>
  );
};

export default function Accordion({ setCreditsOpen }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const categories = [
    {
      title: <Title name="REACH OUT" activeIndex={activeIndex} index={0} />,
      content: (
        <div className="flex flex-col gap-1">
          <Socials />
        </div>
      ),
    },
    {
      title: <Title name="KNOW MORE" activeIndex={activeIndex} index={1} />,
      content: (
        <div className="flex flex-col">
          <ReachOut setCreditsOpen={setCreditsOpen} />
        </div>
      ),
    },
    {
      title: <Title name="JOIN US" activeIndex={activeIndex} index={2} />,
      content: <JoinUs />,
    },
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center">
      {categories.map((category, index) => (
        <div key={index} className="mb-4">
          <button onClick={() => handleClick(index)} className="w-full p-3">
            {category.title}
          </button>
          {activeIndex === index && (
            <div className={`flex flex-col justify-center items-center gap-2`}>
              {category.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
