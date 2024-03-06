"use client";
import { useEffect } from "react";

const colors = [
  ["#c297f9", "#b76fef"],
  ["#FF8173", "#FB6655"],
  ["#9DD764", "#43A363"],
  ["#FEDE88", "#FBD13D"],
  ["#4FB6F0", "#0C5AB9"],
  ["#0C5AB9", "#2E3192"],
];

export default function SpinningBackground({ slideNo }) {
  // change the opacity of the bg based on slideNo
  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      const bg = document.getElementById(`bg${i}`);
      bg.style.opacity = i === slideNo ? 1 : 0;
    }
  }, [slideNo]);

  return (
    <>
      {colors.map((colorPair, index) => (
        <div
          key={index}
          id={`bg${index + 1}`}
          className="z-0 absolute w-[500vw] h-[500vw] bg-spin transition-opacity duration-700 ease-in-out"
          style={{
            background: `repeating-conic-gradient(${colorPair[0]} 0 18deg, ${colorPair[1]} 18deg 36deg)`,
            opacity: slideNo === index + 1 ? 1 : 0,
          }}
        ></div>
      ))}
    </>
  );
}
