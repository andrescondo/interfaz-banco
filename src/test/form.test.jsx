import { render, screen } from '@testing-library/react';
import Form from '../pages/Form';

test('renders component Form', () => {
  render(<Form />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
