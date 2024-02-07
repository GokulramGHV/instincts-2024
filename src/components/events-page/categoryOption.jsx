import { Satoshi } from "next/font/google"
import { useState } from "react"


export default function CategoryOption({ category, selectedCategory, setSelectedCategory }) {
    const [currentlyHovered, setCurrentlyHovered] = useState(false)

    const handleMouseEnter = () => {
        setCurrentlyHovered(true)
    }

    const handleMouseLeave = () => {
        setCurrentlyHovered(false)
    }

    return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ borderColor: category.color, backgroundColor: currentlyHovered ? category.color : selectedCategory === category.name ? category.color : "transparent" }} className={`cursor-pointer mr-5 mb-5 text-2xl px-6 py-3 hover:text-[#FFFCEA] transition-colors rounded-full border-4 font-bold ${selectedCategory === category.name ? " text-[#FFFCEA] " : ""} `} onClick={() => setSelectedCategory(category.name)}>{category.name}</div>
}