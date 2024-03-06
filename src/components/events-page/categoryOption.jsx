import { useState } from "react"


export default function CategoryOption({ category, selectedCategory, setSelectedCategory, setChosenEvents, setQuery}) {
    const [currentlyHovered, setCurrentlyHovered] = useState(false)

    const handleMouseEnter = () => {
        setCurrentlyHovered(true)
    }

    const handleMouseLeave = () => {
        setCurrentlyHovered(false)
    }

    return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ borderColor: category.color, backgroundColor: currentlyHovered ? category.color : selectedCategory === category.name ? category.color : "transparent" }} className={`cursor-pointer md:mr-5 mr-2 md:mb-5 mb-2 md:text-2xl text-lg md:px-6 px-4 md:py-3 py-2 hover:text-[#FFFCEA] transition-colors rounded-full md:border-4 border-[3px] font-bold ${selectedCategory === category.name ? " text-[#FFFCEA] " : ""} `} 
    onClick={ () => {setSelectedCategory(category.name); 
    setChosenEvents(null); 
    setQuery("");}}>{category.name}</div>
}