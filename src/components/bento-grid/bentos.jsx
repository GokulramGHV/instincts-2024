export function GalleryBento() {
  return (
    <div className="relative flex-col sm:flex-row flex justify-center sm:justify-end gap-4 items-center box-border px-4 w-full h-full">
        <img src="/bento_grid/gallery/mask.svg" alt="" className="w-[90%] sm:h-[90%]"/>
        <img src="/bento_grid/gallery/title.svg" alt="" className="hidden sm:block h-[80%]"/>     
        <img src="/bento_grid/gallery/mobile-title.svg" alt="" className="sm:hidden"/> 
    </div>
  )
}

export function SponsorsBento() {
  return (
    <div className="relative flex flex-col justify-center gap-4 items-center box-border py-4 w-full h-full" >
        <img src="/bento_grid/sponsors/doileys.svg" alt="" className="w-[75%]"/>
        <img src="/bento_grid/sponsors/title.svg" alt="" className="w-[65%]"/>      
    </div>
  )
}

export function CentralEventsBento() {
  return (
    <div className="relative box-border p-4 w-full h-full overflow-hidden" >
      <img src="/bento_grid/centralevents/title.svg" alt="" className="w-[70%]" />
      <img src="/bento_grid/centralevents/carnival.svg" alt="" className="w-[100%]  absolute bottom-0 right-0 rounded-[1.25rem]" />
    </div>
  )
}

export function ClubEventsBento() {
  return (
    <div className="relative box-border p-4 w-full h-full overflow-hidden" >
      <img src="/bento_grid/clubevents/title.svg" alt="" className="w-[55%] ml-auto" />
      <img src="/bento_grid/clubevents/wheel.svg" alt="" className="w-[85%] sm:w-[100%] absolute bottom-0 left-0 rounded-[1.25rem]" />
    </div>
  )
}

export function ContactUsBento() {
  return (
    <div className="relative flex-col-reverse sm:flex-row flex justify-end gap-4 items-center box-border p-4 w-full h-full overflow-hidden" >
      <img src="/bento_grid/contactus/balloon.svg" alt="" className=" h-[90%] sm:h-full" />
      <img src="/bento_grid/contactus/title.svg" alt="" className="hidden sm:block h-[90%]" />
      <img src="/bento_grid/contactus/mobile-title.svg" alt="" className="sm:hidden"/>
    </div>
  )
}

export function ScheduleBento() {
  return (
    <div className="relative flex-col sm:flex-row flex justify-center gap-4 sm:gap-8 items-center box-border p-4 w-full h-full overflow-hidden" >
      <img src="/bento_grid/schedule/title.svg" alt="" className="hidden sm:block h-full" />
      <img src="/bento_grid/schedule/mobile-title.svg" alt="" className="sm:hidden w-[80%]"/>
      <img src="/bento_grid/schedule/horseride.svg" alt="" className="w-[80%] sm:w-[70%]" />
    </div>
  )
}

export function GetPassesBento() {
  return (
    <div className="relative flex justify-center gap-8 items-center box-border m-auto mt-[10px] h-[calc(100%_-20px)] w-[calc(100%_-20px)] rounded-[.75rem] overflow-hidden bg-[#FDAF46]" >
      <img src="/bento_grid/getpasses/ticket.svg" alt="" className="h-[80%]" />
    </div>
  )
}