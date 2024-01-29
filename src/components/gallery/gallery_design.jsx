import Squiggly from "./squiggly";
import Wheel from "./wheel";

export default function GalleryDesign() {
  return <div className="hidden sm:block">
    <div className="absolute flex left-0 top-[-3rem]">
      <Wheel /> <Wheel /> <Wheel /> <Wheel />
    </div>
    <div className="absolute flex flex-col bottom-0 right-[-3rem]">
      <Wheel /> <Wheel /> <Wheel /> <Wheel />
    </div>
    <Squiggly vertical />
    <Squiggly />
  </div>
}