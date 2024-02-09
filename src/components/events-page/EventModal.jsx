import React, { useEffect, useRef, useState } from "react";
import { HiUserGroup } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

function getIsLargeScreen() {
  const width = typeof window != "undefined" ? window.innerWidth : 0;
  return width >= 1024;
}

const EventModal = ({ isModalOpen, setModalOpen, event }) => {
  const yScroll = typeof window !== "undefined" ? window.scrollY : 0;
  const ref = useRef();

  const [isLargeScreen, setIsLargeScreen] = useState(getIsLargeScreen());
  const [currentInfo, setCurrentInfo] = useState("DETAILS");

  const closeModal = () => {
    document.body.style.overflow = "inherit";
    setModalOpen(false);
    setCurrentInfo("DETAILS");
  };

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(getIsLargeScreen());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLargeScreen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      event.preventDefault();
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.getAttribute("name") !== "button"
      ) {
        closeModal();
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
          top: yScroll,
          background: "rgba(255, 255, 255, 0.5)",
        }}
        className="absolute lg:top-inherit top-0 right-0 w-[100vw] h-[100vh] lg:py-[50px] lg:px-[100px] lg:overflow-y-scroll lg:block flex items-center p-[10px]"
      >
        <div
          ref={ref}
          style={{
            border: "5px solid black",
            borderRadius: "20px",
            background: "white",
          }}
          className="flex flex-col lg:gap-[38px] lg:py-[30px] lg:px-[20px] lg:max-h-[max-content] py-[20px] px-[25px] gap-[20px] max-h-[100%] overflow-y-auto"
        >
          <div className="flex items-start justify-between">
            <h1 className="font-extrabold lg:text-[50px] text-[30px]">
              {event.title}
            </h1>
            <AiOutlineCloseCircle
              className="lg:hidden"
              color="#8F8D8D"
              onClick={closeModal}
              size={30}
            />
          </div>

          {(isLargeScreen || currentInfo === "DETAILS") && (
            <>
              <div
                className="flex items-center lg:gap-[38px] lg:flex-row lg:px-[15px] lg:py[10px] flex-col gap-[30px] py-[14px] px-[16px]  lg:self-start self-center"
                style={{
                  border: "1px solid gray",
                  borderRadius: 20,
                  maxWidth: "max-content",
                }}
              >
                <div className="flex items-center lg:gap-[38px] gap-[30px]">
                  <div className="flex items-center gap-2">
                    <HiUserGroup
                      className="lg:text-3xl text-[24px]"
                      color="grey"
                    />
                    <span className="lg:text-3xl font-bold text-[19px]">
                      {event.perTeam}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar
                      className="lg:text-3xl text-[24px]"
                      color="grey"
                    />
                    <span className="lg:text-3xl font-bold text-[19px]">
                      {event.dayDetail}
                    </span>
                  </div>
                </div>
                <div className="flex items-center lg:gap-[38px] gap-[30px]">
                  {event.prize.map((p, index) => (
                    <div key={index} className="flex items-center flex-col">
                      <span className="lg:text-3xl text-[19px] font-extrabold">
                        ₹{p.amount}
                      </span>
                      <span
                        className="lg:text-2xl text-[14px] font-light"
                        style={{ color: "gray" }}
                      >
                        {p.place}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:text-2xl font-medium text-[15px]">
                {event.description}
              </div>
            </>
          )}

          {(isLargeScreen || currentInfo === "RULES") && (
            <>
              <div className="flex items-center">
                <hr
                  className="flex-[2]"
                  style={{
                    borderBottom: "4px solid gray",
                    borderRadius: "10px",
                  }}
                />
                <span
                  className="flex justify-center lg:text-2xl font-semibold text-[18px] lg:flex-[1] flex-[2]"
                  style={{ letterSpacing: "4px" }}
                >
                  RULES
                </span>
                <hr
                  className="flex-[2]"
                  style={{
                    borderBottom: "4px solid gray",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <ul
                className="lg:px-[40px] px-[20px]"
                style={{
                  listStyleType: "disc",
                  color: "#505050",
                }}
              >
                {event.rules.map((rule) => (
                  <li
                    className="lg:text-xl lg:mb-2 font-medium text-[16px] mb-1"
                    key={rule}
                  >
                    {rule}
                  </li>
                ))}
              </ul>
            </>
          )}

          {(isLargeScreen || currentInfo === "DETAILS") && (
            <>
              <div className="flex flex-col justify-center items-center">
                <span className="font-medium lg:text-[21px] text-[14px]">
                  FOR QUERIES
                </span>
                <span className="font-black lg:text-[25px] text-[18px]">
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
            </>
          )}

          {(isLargeScreen || currentInfo === "ABOUT CLUB") && (
            <>
              <div
                className="lg:p-[30px] flex lg:flex-row lg:gap-[40px] items-center justify-center p-[20px] flex-col gap-[20px]"
                style={{
                  backgroundColor: "#4FB6F0",
                  borderRadius: 12,
                  color: "white",
                }}
              >
                <div
                  className="flex lg:flex-col items-center justify-center"
                  style={{ flex: 1, gap: 28, height: "100%" }}
                >
                  {event.clubDetails.map((club, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-[11px] justify-between"
                      style={{
                        flex: 1,
                        height: "100%",
                      }}
                    >
                      <div className="lg:h-[125px] lg:w-[100%] h-[70px] w-[100px]">
                        <Image
                          src={club.img}
                          alt="club-img"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            borderRadius: 10,
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </div>
                      <span className="font-black lg:text-[21px] text-[15px]">
                        {club.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="font-medium lg:text-[21px] text-[14px] text-justify"
                  style={{ flex: 3 }}
                >
                  {event.eventDetail}
                </div>
              </div>
            </>
          )}

          {!isLargeScreen && (
            <>
              {currentInfo === "DETAILS" && (
                <div className="flex justify-end">
                  <div className="flex items-center gap-[5px]">
                    <span
                      name="button"
                      className="text-[17px] font-bold underline decoration-2"
                      onClick={() => setCurrentInfo("RULES")}
                    >
                      RULES
                    </span>
                    <IoIosArrowForward className="text-[17px]" />
                  </div>
                </div>
              )}
              {currentInfo === "RULES" && (
                <div className="flex justify-between">
                  <div className="flex items-center gap-[5px]">
                    <IoIosArrowBack className="text-[17px]" />
                    <span
                      name="button"
                      className="text-[17px] font-bold  underline decoration-2"
                      onClick={() => setCurrentInfo("DETAILS")}
                    >
                      DETAILS
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <span
                      name="button"
                      className="text-[17px] font-bold  underline decoration-2"
                      onClick={() => setCurrentInfo("ABOUT CLUB")}
                    >
                      ABOUT CLUB
                    </span>
                    <IoIosArrowForward className="text-[17px]" />
                  </div>
                </div>
              )}
              {currentInfo === "ABOUT CLUB" && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-[5px]">
                    <IoIosArrowBack className="text-[17px]" />{" "}
                    <span
                      name="button"
                      className="text-[17px] font-bold  underline decoration-2"
                      onClick={() => setCurrentInfo("RULES")}
                    >
                      RULES
                    </span>
                  </div>
                </div>
              )}
            </>
          )}

          <button
            className="lg:text-[25px] font-medium lg:py-[23px] self-center lg:w-[70%] text-[20px] py-[15px] w-[100%]"
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
