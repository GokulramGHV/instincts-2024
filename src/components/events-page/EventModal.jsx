import React, { useEffect, useRef } from "react";
import { HiUserGroup } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa";

const EventModal = ({ isModalOpen, setModalOpen, event }) => {
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
          <h1 className="font-extrabold text-6xl">{event.title}</h1>
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
              <span className="text-3xl font-medium">{event.perTeam}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-3xl" color="grey" />
              <span className="text-3xl font-medium">{event.dayDetail}</span>
            </div>

            {event.prize.map((p, index) => (
              <div key={index} className="flex items-center flex-col">
                <span className="text-3xl font-extrabold">₹{p.amount}</span>
                <span className="text-2xl font-light" style={{ color: "gray" }}>
                  {p.place}
                </span>
              </div>
            ))}
          </div>
          <div className="text-2xl font-medium">{event.description}</div>
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
            {event.rules.map((rule) => (
              <li className="text-xl mb-2 font-medium" key={rule}>
                {rule}
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center">
            <span className="font-medium text-[21px]">FOR QUERIES</span>
            <span className="font-black text-[25px]">
              {event.contacts.map((c, index) => {
                return (
                  <>
                    <span>{c}</span>
                    {index !== event.contacts.length - 1 && (
                      <span>{" / "}</span>
                    )}
                  </>
                );
              })}
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
              {event.clubDetails.map((club, index) => (
                <div
                  key={index}
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
                  >
                    <img
                      src={club.img}
                      alt="club-img"
                      style={{
                        objectFit: "contain",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <span className="font-black text-[21px]">{club.name}</span>
                </div>
              ))}
            </div>
            <div className="font-medium text-[21px]" style={{ flex: 3 }}>
              {event.eventDetail}
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
            REGISTER: <span className="font-bold">₹{event.fee}</span>
          </button>
        </div>
      </div>
    )
  );
};

export default EventModal;
