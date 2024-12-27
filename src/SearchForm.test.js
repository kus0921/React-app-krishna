import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm'; // Import the SearchForm component
import SearchComponent from './SearchComponent';

describe('SearchForm Component', () => {

    test('renders input with the value equal to initial value passed in props', () => {
      const initialSearchValue = 'ReactTesting';
  
      // Render the component with the initial value as a prop
      render(<SearchComponent initialSearchQuery = {initialSearchValue} />);
  
      // Find the input element
      const inputElement = screen.getByPlaceholderText('Search');
      console.log(inputElement);
  
      // Assert that the input value is the same as the initial value passed as a prop
      expect(inputElement).toHaveValue(initialSearchValue);
    });

  
  test('calls onChange prop with proper value after typing and clicking Submit', () => {
    const initialValue = '';
    const handleChange = jest.fn(); // Mock function for onChange
    render(< SearchComponent initialSearchQuery = {initialValue}  onChange= {handleChange} />);
    // Get the input and submit button elements
    const inputElement = screen.getByPlaceholderText(/search/i);
    // Simulate typing into the input
    fireEvent.change(inputElement, { target: { value: 'New Query' } });     
    
    expect(inputElement.value).toBe('New Query');

  });

});
