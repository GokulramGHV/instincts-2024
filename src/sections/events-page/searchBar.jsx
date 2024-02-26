import {events} from '@/app/events/events.js';
import { useEffect, useState } from 'react';


const SearchBar = ({setChosenEvents, setQuery, query}) => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count <2){
      setCount(count+1);
    }
    else{
    var chosen = [];
    console.log("quryyyyyyy ==== ",query);
    events.forEach(eventDetail => {
      let title=eventDetail.title.toLowerCase();
      let category=eventDetail.category.toLowerCase();
      // let desc=eventDetail.description.toLowerCase();
      let date=eventDetail.dayDetail.toLowerCase();
      if(title.includes(query) || category.includes(query)){
        
          chosen.push(eventDetail)
          // console.log(chosen)
      }
      setChosenEvents(chosen);
  })
  }
},[query]);




  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
        <div className='flex md:px-12 px-6 sm:px-2 mb-5 items-center'>
            <input
                type="text"
                placeholder="Search..."
                // value={query}
                onChange={handleChange}
                className='cursor-pointer w-full p-3 sm:pl-8 md:text-2xl text-lg hover:text-[#000000] transition-colors rounded-full md:border-4 border-[3px] pr-[60px] font-bold bg-slate-200 bg-opacity-30 backdrop-blur-md focus:border-slate-800 hover:border-slate-500'
            />
            <img src="/events-page/search-icon.png" alt="" className='sm:h-[30px] h-[20px] w-auto sm:-translate-x-14 -translate-x-9' />
        </div>
    </>
  );
};

export default SearchBar;