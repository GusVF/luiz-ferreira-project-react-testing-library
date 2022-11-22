import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';

describe('if "No favorite pokemon found" renders', () => {
  test('', () => {
    renderWithRouter(<FavoritePokemon />);
    const noFavorite = screen.getByText(/no favorite pokémon found/i);

    expect(noFavorite).toBeInTheDocument();
  });
});
