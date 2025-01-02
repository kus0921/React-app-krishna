import React, { useState } from 'react';
import SearchComponent from './SearchComponent';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // Callback to handle the search action
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  return (
    <div>
      <h1>Search Example</h1>
      <SearchComponent initialSearchQuery={searchQuery} onSearch={handleSearch} />
      <p>Current Search Query: {searchQuery}</p>
    </div>
  );
};
export default SearchForm;

