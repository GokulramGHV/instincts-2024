import "./pattern.css"

// TODO Make the child animate till the end
export default function Pattern() {
    return (
        <div className="bg-primary-pink w-full h-full rounded-[1.25rem] z-5  overflow-hidden relative flex flex-row items-center">
            <div className="w-full relative h-full flex items-center justify-start gap-4">
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
                <img src={"/bento_grid/pattern_flower.svg"} className="absolute h-[54%] animate-move" />
            </div>
        </div>
    )
}