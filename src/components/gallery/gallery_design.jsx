import Squiggly from "./squiggly";
import Wheel from "./wheel";

export default function GalleryDesign() {
  return <div className="hidden sm:block">
    <div className="absolute flex aspect-[4/1] h-[11%] top-[-13%] left-0">
      <Wheel /> <Wheel /> <Wheel /> <Wheel />
    </div>
    <div className="absolute bottom-0 right-[-8%] aspect-[1/4] h-[44%]">
      <Wheel /> <Wheel /> <Wheel /> <Wheel />
    </div>
    <Squiggly vertical />
    <Squiggly />
  </div>
}