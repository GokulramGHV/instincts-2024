import CategoryOption from "@/components/events-page/categoryOption"



export default function CategoryPicker({ selectedCategory, setSelectedCategory, categories, setChosenEvents, setQuery }) {
    
    return <>
        <div className="flex md:p-12 px-6 py-12 flex-wrap">
            {
                categories.map((category, index) => {
                    return <CategoryOption key={index} category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setChosenEvents={setChosenEvents} setQuery={setQuery}/>
                })
            }
        </div>
    </>
}