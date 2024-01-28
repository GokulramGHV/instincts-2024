import Pattern from './patter';

// TODO Make new grid for smaller Tablets
export default function BentoGrid() {
    return (
        <div className="flex flex-row items-center justify-center w-full h-screen z-5">
            <div className="flex flex-col md:grid grid-cols-8 grid-rows-6 gap-2 w-11/12 h-[90dvh]  overflow-auto">
                <div className="col-span-3 row-span-2"><img src={"/bento_grid/gallery_default.png"} className="w-full max-h-full " /></div>
                <div className="col-span-2 row-span-4 col-start-1 row-start-3"><img src={"/bento_grid/club_events_default.png"} className="w-full max-h-full " /></div>
                <div className="col-span-3 row-span-2 col-start-4 row-start-1"><img src={"/bento_grid/sponsors_default.png"} className="w-full max-h-full " /></div>
                <div className="col-span-4 row-span-2 col-start-3 row-start-3"><img src={"/bento_grid/pass_default.png"} className="w-full max-h-full " /></div>
                <div className="col-span-3 row-span-2 col-start-3 row-start-5"><img src={"/bento_grid/contact_default.png"} className="w-full max-h-full " /></div>
                <div className="hidden md:block col-span-2 col-start-7 row-start-1"><Pattern /></div>
                <div className="col-span-2 row-span-3 col-start-7 row-start-2"><img src={"/bento_grid/central_events_default.png"} className="w-full max-h-full " /></div>
                <div className="col-span-3 row-span-2 col-start-6 row-start-5"><img src={"/bento_grid/schedule_default.png"} className="w-full max-h-full " /></div>
            </div>
        </div >
    )
}