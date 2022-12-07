import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/nesine/i);
  expect(linkElement).toBeInTheDocument();
});

test('Snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
