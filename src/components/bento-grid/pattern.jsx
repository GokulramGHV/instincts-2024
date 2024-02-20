import "./pattern.css"

// TODO Make the child animate till the end
export default function Pattern() {
    return (
        <div className="bg-[#FF4E84] w-full h-full rounded-3xl z-5  overflow-hidden relative flex flex-row items-center">
            <div className="w-full my-1 relative h-2/3">
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-full animate-move " />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-full animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-full animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-full animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-full animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-full animate-move" />
            </div>
        </div>
    )
}