import React, { useState } from 'react';

const SearchComponent = ({ initialSearchQuery, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchQuery);

  // Handle input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search trigger (either pressing Enter or clicking the button)
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  // Handle the Enter key press to trigger the search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyPress} // Listen for Enter key press
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
