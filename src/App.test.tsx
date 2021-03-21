import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// TODO: Only to test unit tests, will change this later
test('Name is in document', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tomás Rinaldi/i);
  expect(linkElement).toBeInTheDocument();
});
