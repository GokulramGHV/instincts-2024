'use client';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { JoinUs, ReachOut, Socials } from './Categories';
import { Row } from './Row';

const Title = ({ name, activeIndex, index }) => {
  return (
    <Row gap={5}>
      <p className="text-white text-xl font-satoshi">{name}</p>
      {activeIndex === index ? (
        <FaMinus color="white" />
      ) : (
        <FaPlus color="white" />
      )}
    </Row>
  );
};

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const categories = [
    {
      title: <Title name="SOCIALS" activeIndex={activeIndex} index={0} />,
      content: (
        <div className="flex flex-col gap-1">
          <Socials />
        </div>
      ),
    },
    {
      title: <Title name="REACH OUT" activeIndex={activeIndex} index={1} />,
      content: (
        <div className="flex flex-col">
          <ReachOut />
        </div>
      ),
    },
    {
      title: <Title name="JOIN US" activeIndex={activeIndex} index={2} />,
      content: <JoinUs />,
    },
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => handleClick(index)}
            className="w-full p-3 text-left"
          >
            {category.title}
          </button>
          {activeIndex === index && (
            <div className="p-8 bg-[#52a0ff] ease-out rounded-lg">
              <p>{category.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
