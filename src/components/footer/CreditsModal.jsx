"use client";

import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function CreditsModal({ isModalOpen, setModalOpen, event }) {
    isModalOpen = true;

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        isModalOpen && (
            <div
                style={{
                    background: "rgba(0, 0, 0, 0.4)",
                }}
                className="absolute top-0 right-0 w-[100vw] h-[100vh] lg:py-[50px] lg:px-[100px] md:p-[50px] lg:block flex items-center p-[10px] z-50"
            >
                <div
                    style={{
                        border: "5px solid black",
                        borderRadius: "20px",
                        background: "white",
                    }}
                    className="flex flex-col mx-auto lg:w-[65vw] 2xl:w-[50vw] lg:gap-7 gap-[20px] md:py-[30px] md:px-[30px] lg:max-h-[max-content] py-[20px] px-[25px] max-h-[100%] overflow-y-auto"
                >
                    Hello

                    <AiOutlineCloseCircle
                        color="#8F8D8D"
                        onClick={closeModal}
                        size={30}
                    />
                </div>

            </div>
        )
    )
}