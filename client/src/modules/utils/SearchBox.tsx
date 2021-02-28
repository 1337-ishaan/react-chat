import React from "react";

const SearchBox = () => {
  return (
    <div className="p-3">
    <div className="flex items-center rounded-full shadow-md">
      <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
      <div className="p-4">
        <button className="text-white rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center">
          <img alt="search" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" />
        </button>
        </div>
    </div>
  </div>
  );
};

export default SearchBox;
