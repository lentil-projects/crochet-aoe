import { render, screen } from '@testing-library/react';
import {App} from './App';

test('crochet panel', () => {
  render(<App />);
  const panel = screen.getByText(/crochet/i);
  expect(panel).toBeInTheDocument();
});
