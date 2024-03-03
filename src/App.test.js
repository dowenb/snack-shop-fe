import { render, screen } from '@testing-library/react';
import App from './App';

test('renders snack shop header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Project Snack Shop/i);
  expect(headerElement).toBeInTheDocument();
});
