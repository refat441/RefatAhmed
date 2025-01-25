import React from "react";

// SearchBar component
const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="p-4">
    <input
      type="text"
      placeholder="Search by user name..."
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
      value={searchQuery} // Sets the value of the input field to the current searchQuery state
      onChange={(e) => setSearchQuery(e.target.value)} // Updates searchQuery on each input change
    />
  </div>
);

export default SearchBar;
