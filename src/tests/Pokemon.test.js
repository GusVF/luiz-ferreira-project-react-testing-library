import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemonList from '../data';

describe('tests if renders Pokemon with info', () => {
  test('if info card renders on screen with', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemonList[0] }
      isFavorite
      showDetailsLink
    />);
    const { name,
      type,
      image,
      averageWeight: { value, measurementUnit } } = pokemonList[0];

    const pokemonName = screen.getByText(name);
    const pokemonType = screen.getByText(type);
    const pokemonImg = screen.getByAltText(/sprite/i);
    const pokemonWeight = screen.getByText(`Average weight: ${value} ${measurementUnit}`);
    const pokemonId = screen.getByRole('link', {
      name: /more details/i });

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonImg.src).toBe(image);
    expect(pokemonImg.alt).toEqual(`${name} sprite`);
    expect(pokemonId).toBeInTheDocument();
    userEvent.click(pokemonId);

    expect(pokemonId.href).toContain('http://localhost/pokemon/25');

    const favoriteIcon = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i });

    expect(favoriteIcon).toBeInTheDocument();
    expect(favoriteIcon.alt).toBe(`${name} is marked as favorite`);
    expect(favoriteIcon.src).toContain('/star-icon.svg');
  });
});
