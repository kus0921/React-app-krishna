import React from 'react';

const GenreList = ({ genres, selectedGenre, onSelect }) => {
  return (
    <div>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}  // Call the onSelect callback with the genre name
          style={{
            padding: '10px',
            margin: '5px',
            backgroundColor: genre === selectedGenre ? 'blue' : 'lightgray', // Highlight selected genre
            color: genre === selectedGenre ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreList;
