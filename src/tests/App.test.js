import { React } from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Tests the links on the "Home" page', () => {
  test('if link rederects to "Home" ', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });

    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);
    expect(history.location.pathname).toBe('/');
  });

  test('if link rederects to "About" page', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(history.location.pathname).toBe('/about');
  });

  test('if link rederects to "Favorite Pokemon"', () => {
    const { history } = renderWithRouter(<App />);
    const favoritePokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });

    expect(favoritePokemonLink).toBeInTheDocument();
    userEvent.click(favoritePokemonLink);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('if rederects to "Not Found" link', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/notFound');
    });
    const pokemonNotFound = screen.getByRole('heading', { name: /pokédex/i, level: 1 });
    expect(pokemonNotFound).toBeInTheDocument();

    const pageNotFound = screen.getByRole('heading', {
      name: /page requested not found/i });
    expect(pageNotFound).toBeInTheDocument();

    const notFoundImg = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i });
    expect(notFoundImg).toBeInTheDocument();
  });
});
