import React, { useState } from 'react';
const SearchComponent = ({ initialQuery = '', onSearch }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (e) => {   setQuery(e.target.value);  };
  const handleSearch = () => {  if (onSearch) {  onSearch(query);  } };
  const handleKeyDown = (e) => { if (e.key === 'Enter') { handleSearch();  } };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
