import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SearchBar = ({ events, setFilteredEvents }) => {
  const [search, setSearch] = useState("");
  const ref = useRef();

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearch(search);

    const filteredEvents = events.filter((event) =>
      event.title.toLowerCase().includes(search)
    );

    setFilteredEvents(filteredEvents);
  };

  const handleClear = () => {
    setSearch("");
    setFilteredEvents(events);
    ref.current.value = "";
  };

  return (
    <div className="px-12 py-12 ">
      <div
        style={{ outline: "1px solid grey" }}
        className="flex gap-24 items-center px-4 rounded-lg"
      >
        <input
          type="text"
          className="w-[100%] py-2 text-xl focus:outline-0"
          ref={ref}
          onChange={handleChange}
        />
        {search != "" ? (
          <IoClose size={40} className="cursor-pointer" onClick={handleClear} />
        ) : (
          <FaSearch size={30} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
