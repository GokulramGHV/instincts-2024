'use client'

import { useState } from "react"
import Head from "next/head"
import Image from "next/image"


const scheduleDetails = [
    '/schedule/1.png',
    '/schedule/2.png',
    '/schedule/3.png',
]


export default function ScheduleMain() {
    const [selectedDay, setSelectedDay] = useState(0)
    return <>
        <Head>
            {
                scheduleDetails.map((day, index) => {
                    return <link key={index} rel="preload" href={day} as="image" />
                })    
            }
        </Head>
        <div className="px-4 md:px-6 py-12 flex flex-col">
            <select 
                onChange={e => setSelectedDay(e.target.value)}
                className="px-6 mb-7 mx-auto h-fit py-4 text-lg font-bold rounded-full border-4 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-150 ease-in-out"
            >
                {scheduleDetails.map((day, index) => {
                    return <option key={index} value={index}>{`Schedule for Day ${index + 1}`}</option>
                })}
            </select>
            <Image  height={1080} width={1080} className="w-full max-w-7xl mx-auto" src={scheduleDetails[selectedDay]} alt="schedule" />
        </div>
    </>
}