import React, { useEffect, useRef } from "react";
import { HiUserGroup } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa";

const rules = [
  "Team of 2.",
  "Time limit : 60-120 seconds per team.",
  "Pairs will be pitted against each other at random.",
  "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
  "Usage of props is allowed.",
  "Obscenity and vulgarity will not be entertained.",
  "Inflammable objects, water and heavy objects are not allowed on stage.",
  "Decisions of the judges and coordinators will be final and binding.",
  "The Organizing Committee reserves the right to modify the event at any point.",
];

const EventModal = ({ isModalOpen, setModalOpen }) => {
  const yScroll = typeof window !== "undefined" ? window.scrollY : 0;
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      event.preventDefault();
      if (ref.current && !ref.current.contains(event.target)) {
        document.body.style.overflow = "inherit";
        setModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen, setModalOpen]);

  return (
    isModalOpen && (
      <div
        style={{
          position: "absolute",
          top: yScroll,
          right: 0,
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          background: "rgba(255, 255, 255, 0.5)",
          padding: "50px 100px",
        }}
      >
        <div
          ref={ref}
          style={{
            border: "5px solid black",
            borderRadius: "20px",
            background: "white",
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "38px",
          }}
        >
          <h1 className="font-extrabold text-6xl">2v2 Dance Battle</h1>
          <div
            className="flex items-center gap-[38px]"
            style={{
              border: "1px solid gray",
              borderRadius: 20,
              padding: "10px 15px",
              maxWidth: "max-content",
            }}
          >
            <div className="flex items-center gap-2">
              <HiUserGroup className="text-3xl" color="grey" />
              <span className="text-3xl font-medium">2</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-3xl" color="grey" />
              <span className="text-3xl font-medium">8 Mar</span>
            </div>
            <div className="flex items-center flex-col">
              <span className="text-3xl font-extrabold">₹5000</span>
              <span className="text-2xl font-light" style={{ color: "gray" }}>
                First
              </span>
            </div>
            <div className="flex items-center flex-col">
              <span className="text-3xl font-extrabold">₹2500</span>
              <span className="text-2xl font-light" style={{ color: "gray" }}>
                Second
              </span>
            </div>
            <div className="flex items-center flex-col">
              <span className="text-3xl font-extrabold">₹1500</span>
              <span className="text-2xl font-light" style={{ color: "gray" }}>
                Third
              </span>
            </div>
          </div>
          <div className="text-2xl font-medium">
            Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.
          </div>
          <div className="flex items-center">
            <hr
              style={{
                flex: 2,
                borderBottom: "4px solid gray",
                borderRadius: "10px",
              }}
            />
            <span
              className="flex justify-center text-2xl font-semibold"
              style={{ flex: 1, letterSpacing: "4px" }}
            >
              RULES
            </span>
            <hr
              style={{
                flex: 2,
                borderBottom: "4px solid gray",
                borderRadius: "10px",
              }}
            />
          </div>
          <ul
            style={{
              listStyleType: "disc",
              padding: "0px 40px",
              color: "#505050",
            }}
          >
            {rules.map((rule) => (
              <li className="text-xl mb-2 font-medium" key={rule}>
                {rule}
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center">
            <span className="font-medium text-[21px]">FOR QUERIES</span>
            <span className="font-black text-[25px]">
              73388 83803 / 78240 15392
            </span>
          </div>
          <div
            className="p-[30px] flex items-center"
            style={{
              backgroundColor: "#4FB6F0",
              minHeight: 330,
              gap: 40,
              borderRadius: 12,
              color: "white",
            }}
          >
            <div
              className="flex flex-col"
              style={{ flex: 1, gap: 28, height: "100%" }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 11,
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  className="bg-white"
                  style={{ width: "100%", height: 124, borderRadius: 9 }}
                ></div>
                <span className="font-black text-[21px]">Rhythm</span>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 11,
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  className="bg-white"
                  style={{ width: "100%", height: 124, borderRadius: 9 }}
                ></div>
                <span className="font-black text-[21px]">N2K</span>
              </div>
            </div>
            <div className="font-medium text-[21px]" style={{ flex: 3 }}>
              Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!
            </div>
          </div>
          <button
            className="text-[25px] font-medium py-[23px] self-center w-[70%]"
            style={{
              backgroundColor: "#43A363",
              borderRadius: 60,
              color: "#E6FCFF",
            }}
          >
            REGISTER: <span className="font-bold">₹100</span>
          </button>
        </div>
      </div>
    )
  );
};

export default EventModal;
