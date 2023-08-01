import { render, screen } from '@testing-library/react';
// import App from '.';
import FeaturedHouse from './featured-house';

test('renders learn react link', () => {
  render(<FeaturedHouse />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
