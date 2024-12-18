import React, { useState } from 'react';
import GenreList from './GenreList';

const GenreSearch = () => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);  // Update the selected genre when a genre is clicked
  };

  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];

  return (
    <div>
      <h1>Select a Genre</h1>
      <GenreList 
        genres={genres} 
        selectedGenre={selectedGenre} 
        onSelect={handleGenreSelect} 
      />
      <p>Selected Genre: {selectedGenre}</p>
    </div>
  );
};
export default GenreSearch;