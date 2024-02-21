import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { Remarkable } from "remarkable";
import CalendarIcon from "@/icons/calendarIcon";
import TeamIcon from "@/icons/teamIcon";
import Link from "next/link";

let md = new Remarkable();

function getIsLargeScreen() {
  const width = typeof window != "undefined" ? window.innerWidth : 0;
  return width >= 1024;
}

const EventModal = ({ isModalOpen, setModalOpen, event }) => {
  const yScroll = typeof window !== "undefined" ? window.scrollY : 0;
  const ref = useRef();
  const [isLargeScreen, setIsLargeScreen] = useState(getIsLargeScreen());
  const [currentInfo, setCurrentInfo] = useState("DETAILS");
  const [isTooltipOpen, setTooltipOpen] = useState(false);

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
          background: "rgba(0, 0, 0, 0.4)",
        }}
        className="absolute top-0 right-0 w-[100vw] h-[100vh] lg:py-[50px] lg:px-[100px] md:p-[50px] lg:overflow-y-scroll lg:block flex items-center p-[10px]"
      >
        <div
          ref={ref}
          style={{
            border: "5px solid black",
            borderRadius: "20px",
            background: "white",
          }}
          className="flex flex-col mx-auto lg:w-[65vw] 2xl:w-[50vw] lg:gap-7 gap-[20px] md:py-[30px] md:px-[30px] lg:max-h-[max-content] py-[20px] px-[25px] max-h-[100%] overflow-y-auto"
        >
          <div className="flex items-start justify-between">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5">
              <h1 className="font-extrabold xl:text-[50px] md:text-[42px] text-[30px]">
                {event.title}
              </h1>
              {event.title === "Reels of Fire" && (
                <div className="flex gap-6 justify-center items-center">
                  <Image
                    src="/sponsors/unstop_logo.png"
                    alt="Unstop"
                    className="h-fit"
                    width={100}
                    height={100}
                  />
                  <Image
                    src="/sponsors/ags_cinemas_logo.png"
                    alt="AGS"
                    className="h-fit"
                    width={70}
                    height={70}
                  />
                </div>
              )}
            </div>
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
                className="flex flex-col lg:flex-row items-center gap-3 md:gap-[30px] py-2 px-5  lg:self-start self-center"
                style={{
                  border: "1px solid gray",
                  borderRadius: 20,
                  maxWidth: "max-content",
                }}
              >
                <div className="flex items-center lg:gap-[38px] gap-[30px]">
                  <div
                    className="flex items-center gap-2 relative cursor-pointer"
                    onMouseEnter={() => setTooltipOpen(true)}
                    onMouseLeave={() => setTooltipOpen(false)}
                  >
                    {/* <HiUserGroup className="md:text-3xl text-xl" color="grey" /> */}
                    <TeamIcon className="fill-current w-6 md:w-7 xl:w-8" />
                    <span className="xl:text-3xl md:text-2xl font-bold text-[19px]">
                      {event.teamSize}
                    </span>
                    {isTooltipOpen && (
                      <div
                        className="lg:block hidden absolute bottom-[-90px] text-[21px] min-w-[max-content] bg-white px-[16px] py-[18px]"
                        style={{
                          border: "2px solid black",
                          borderRadius: 13,
                        }}
                      >
                        Participants must be a team of {event.teamSize} members.
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <FaCalendar className="md:text-3xl text-xl" color="grey" /> */}
                    <CalendarIcon className="fill-current w-5 md:w-6 xl:w-7" />
                    <span className="xl:text-3xl md:text-2xl font-bold text-[19px]">
                      {event.dayDetail}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5 md:gap-8">
                  {event.prize.map((p, index) => (
                    <div key={index} className="flex items-center flex-col">
                      <span className="xl:text-3xl md:text-2xl text-xl font-extrabold">
                        ₹{p.amount}
                      </span>
                      <span className="text-lg" style={{ color: "gray" }}>
                        {p.place}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:text-xl font-medium">{event.description}</div>
            </>
          )}

          {(isLargeScreen || currentInfo === "RULES") && (
            <>
              <div className="flex items-center">
                <hr
                  className="flex-[2]"
                  style={{
                    border: "2px solid #8F8D8D",
                    borderRadius: "10px",
                  }}
                />
                <span
                  className="flex justify-center lg:text-2xl md:text-xl text-[18px] font-semibold lg:flex-[1] flex-[2]"
                  style={{ letterSpacing: "4px" }}
                >
                  RULES
                </span>
                <hr
                  className="flex-[2]"
                  style={{
                    border: "2px solid #8F8D8D",
                    borderRadius: "10px",
                  }}
                />
              </div>
              {/* <div className="max-h-[60vh] overflow-y-scroll w-full"> */}
              <section
                className="prose md:text-xl"
                dangerouslySetInnerHTML={{
                  __html: md.render(event?.rules),
                }}
              />
              {/* </div> */}
            </>
          )}

          {(isLargeScreen || currentInfo === "DETAILS") && (
            <>
              <div className="flex flex-col justify-center items-center text-center">
                <span className="font-medium lg:text-[21px] md:text-[18px] text-[14px]">
                  FOR QUERIES
                </span>
                <span className="font-black lg:text-[25px] md:text-[22px] text-[18px]">
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
                className="lg:p-[30px] flex lg:flex-row lg:gap-[40px] md:gap-[30px] items-center justify-center p-[20px] flex-col gap-[20px]"
                style={{
                  backgroundColor: "#4FB6F0",
                  borderRadius: 12,
                  color: "white",
                }}
              >
                <div
                  className="flex lg:flex-col items-center justify-center md:gap-[50px] gap-[20px]"
                  style={{ flex: 1, height: "100%" }}
                >
                  {event.clubLogos.map((club, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-[11px] justify-between"
                      style={{
                        flex: 1,
                        height: "100%",
                      }}
                    >
                      <div className="lg:h-[125px] lg:w-[100%] md:h-[100px] md:w-[140px] h-[70px] w-[100px]">
                        <Image
                          src={club.img}
                          alt="club-img"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            borderRadius: 10,
                            objectFit: "contain",
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </div>
                      <span className="font-black lg:text-[21px] md:text-[18px] text-[15px]">
                        {club.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="font-medium lg:text-xl md:text-lg text-justify"
                  style={{ flex: 3 }}
                >
                  {event.clubDescription}
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
                      className="md:text-[20px] text-[17px] font-bold underline decoration-2"
                      onClick={() => setCurrentInfo("RULES")}
                    >
                      RULES
                    </span>
                    <IoIosArrowForward className="md:text-[20px] text-[17px]" />
                  </div>
                </div>
              )}
              {currentInfo === "RULES" && (
                <div className="flex justify-between">
                  <div className="flex items-center gap-[5px]">
                    <IoIosArrowBack className="md:text-[20px] text-[17px]" />
                    <span
                      name="button"
                      className="md:text-[20px] text-[17px] font-bold  underline decoration-2"
                      onClick={() => setCurrentInfo("DETAILS")}
                    >
                      DETAILS
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <span
                      name="button"
                      className="md:text-[20px] text-[17px] font-bold  underline decoration-2"
                      onClick={() => setCurrentInfo("ABOUT CLUB")}
                    >
                      ABOUT CLUB
                    </span>
                    <IoIosArrowForward className="md:text-[20px] text-[17px]" />
                  </div>
                </div>
              )}
              {currentInfo === "ABOUT CLUB" && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-[5px]">
                    <IoIosArrowBack className="md:text-[20px] text-[17px]" />{" "}
                    <span
                      name="button"
                      className="md:text-[20px] text-[17px] font-bold  underline decoration-2"
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
            className={`flex flex-wrap ${
              event.fee.length > 1 && "flex-col"
            } gap-1 justify-center items-center lg:text-xl md:text-lg font-medium lg:py-[23px] md:py-[20px] py-[15px] lg:w-[70%] w-[100%] self-center`}
            style={{
              backgroundColor: "#43A363",
              borderRadius: 60,
              color: "#E6FCFF",
            }}
            onClick={() => {
              if (event.title === "Reels of Fire") {
                window.open(event.registrationLink, "_blank");
              } else {
                window.open(
                  `/get-passes/register?event=${encodeURIComponent(
                    event.title
                  )}#main`,
                  "_blank"
                );
              }
            }}
          >
            REGISTER:
            <div>
              {event.fee.map((feeOption, index) => (
                <div key={index}>
                  <span className="font-bold">₹{feeOption}</span>
                </div>
              ))}
            </div>
          </button>
        </div>
      </div>
    )
  );
};

export default EventModal;
