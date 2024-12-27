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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import SearchForm from './SearchForm';

// const App = () => {
//   const handleSearch = (query) => {
//     console.log('Search triggered with query:', query);
//   };

//   return (
//     <div>
//       <h1>Search Form Example</h1>
//       <SearchForm initialSearchQuery="React" onSearch={handleSearch} />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
