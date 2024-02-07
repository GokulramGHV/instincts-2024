'use client'

import Hero from "@/sections/events-page/hero";
import CategoryPicker from "@/sections/events-page/categoryPicker";
import EventsSection from "@/sections/events-page/eventsSection";
import { useState } from "react";


const categories = [
    {
        name: "All Events",
        color: "#202020"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Tamil Lit.",
        color: "#DB2525"
    },
    {
        name: "Photography",
        color: "#00644C"
    }
]


export default function EventsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All Events")

    return <>
        <Hero />
        <CategoryPicker categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <EventsSection />
    </>
}