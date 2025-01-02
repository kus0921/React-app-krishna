import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Count from './CounterWithCreateElement'; // Import your Count component

describe('Count Component', () => {
  
  test('renders initial count value as 0', () => {
    // Render the Count component
    render(<Count initialValue={12} />);

    // Find the element that displays the count value
    const countElement = screen.getByText(/value:/i); // Regex to match "Value: " text
    
    // Assert that the initial count is 0
    expect(countElement).toHaveTextContent('Value: 12');
  });

  test('increments the count when "Increment" button is clicked', () => {
    // Render the Count component
    render(<Count />);

    // Find the "Increment" button
    const incrementButton = screen.getByText(/increment/i);
    
    // Simulate a click on the increment button
    fireEvent.click(incrementButton);
    
    // Find the count element and assert that the value is now 1
    const countElement = screen.getByText(/value:/i);
    expect(countElement).toHaveTextContent('Value: 1');
  });

  test('decrements the count when "Decrement" button is clicked', () => {
    // Render the Count component
    render(<Count />);

    // Find the "Decrement" button
    const decrementButton = screen.getByText(/decrement/i);
    
    // Simulate a click on the decrement button
    fireEvent.click(decrementButton);
    
    // Find the count element and assert that the value is now -1
    const countElement = screen.getByText(/value:/i);
    expect(countElement).toHaveTextContent('Value: -1');
  });

});
