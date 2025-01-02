import { render, screen, fireEvent } from '@testing-library/react';
import GenreSearch from './GenreSearch'; // Adjust the import path based on your setup

test('renders all genres passed in props', () => {
  const genres = ['Action', 'Drama', 'Comedy', 'Horror'];
  render(<GenreSearch genres={genres} selectedGenre="Comedy" onSelect={() => {}} />);

  // Check if all genres are rendered as buttons
  genres.forEach((genre) => {
    expect(screen.getByText(genre)).toBeInTheDocument();
  });
});

test('highlights the selected genre passed in props', () => {
  const genres = ['Action', 'Drama', 'Comedy', 'Horror'];
  const selectedGenre = 'Comedy';
  render(<GenreSearch genres={genres} selectedGenre={selectedGenre} onSelect={() => {}} />);

  // Check if the selected genre is highlighted
  const selectedButton = screen.getByText(selectedGenre);
  expect(selectedButton).toHaveStyle('background-color: lightgray');
  
  // Check if other genres are not highlighted
  genres.forEach((genre) => {
    if (genre !== selectedGenre) {
      const button = screen.getByText(genre);
      expect(button).not.toHaveStyle('background-color: lightblue');
    }
  });
});

test('calls onSelect callback and passes correct genre after click', () => {
  const genres = ['Action', 'Drama', 'Comedy', 'Horror'];
  const mockOnSelect = jest.fn();
  render(<GenreSearch genres={genres} selectedGenre="Comedy"  onSelect= {mockOnSelect}  />); 
  // Simulate a click on the 'Action' button
  // Get the button by its text content ("Action")
  const button = screen.getByText('Action');
  
  // Simulate a click event on the "Action" button
  fireEvent.click(button);
  
  // Assert that the mock click handler was called
  expect(mockOnSelect).toHaveBeenCalledTimes(1); // The handler should be called once
});


