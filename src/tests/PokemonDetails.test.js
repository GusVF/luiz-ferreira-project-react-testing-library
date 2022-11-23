import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

const HREF = '/pokemon/25';
describe('tests the rendering of PokemonDetails', () => {
  test('the rendering of Pokemon information', () => {
    const { history } = renderWithRouter(<App />);
    const { name } = pokemonList[0];

    expect(history.location.pathname).toBe('/');
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    expect(detailsLink).toBeInTheDocument();

    userEvent.click(detailsLink);
    const nameInDetails = screen.getByRole('heading', { name: `${name} Details` });
    expect(nameInDetails).toBeInTheDocument();

    const summary = screen.getByRole('heading', { name: /summary/i });
    expect(summary).toBeInTheDocument();

    const discription = screen.getByText(
      /this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i,
    );
    expect(discription).toBeInTheDocument();

    expect(detailsLink).not.toBeInTheDocument();
    expect(history.location.pathname).toBe(HREF);
  });
  test('if map and location render', async () => {
    renderWithRouter(<App />);
    const pikachuName = pokemonList[0];
    const { name } = pokemonList[0];

    const linkToPokemon = screen.getByRole('link', { name: /more details/i });
    expect(linkToPokemon).toBeInTheDocument();

    userEvent.click(linkToPokemon);

    const gameLocation = screen.getByRole('heading', { name: `Game Locations of ${name}` });
    expect(gameLocation).toBeInTheDocument();

    const image = await screen.findAllByRole('img');

    const mapping = pikachuName.foundAt;
    const { map } = mapping[0];

    expect(image.length).toBe(mapping.length + 1);
    expect(image[1]).toHaveAttribute('src', map);
    expect(image[1]).toHaveAttribute('alt', `${name} location`);
  });

  test('pokemon favorite and remove pokemon favorite', () => {
    renderWithRouter(<App />);

    const linkToPokemon = screen.getByRole('link', { name: /more details/i });
    expect(linkToPokemon).toBeInTheDocument();

    userEvent.click(linkToPokemon);

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(checkbox).toBeInTheDocument();

    const checkBoxLabel = screen.getByLabelText('Pokémon favoritado?');
    expect(checkBoxLabel).toBeInTheDocument();

    userEvent.click(checkbox);

    const favoriteStar = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i });
    expect(favoriteStar).toBeInTheDocument();

    userEvent.click(checkbox);

    expect(favoriteStar).not.toBeInTheDocument();
  });
});
