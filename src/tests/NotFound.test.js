import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('test if "Not Found" page elements render', () => {
  test('if page elements render', () => {
    renderWithRouter(<NotFound />);

    const notFoundEl = screen.getByRole('heading', {
      name: /page requested not found/i, level: 2 });
    expect(notFoundEl).toBeInTheDocument();
  });

  test('if image renders with "url"', () => {
    renderWithRouter(<NotFound />);
    const imgUrl = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const notFoundImg = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i });
    expect(notFoundImg).toBeInTheDocument();
    expect(notFoundImg.src).toBe(imgUrl);
  });
});
