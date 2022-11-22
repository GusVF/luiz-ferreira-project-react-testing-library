import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('tests contents of "About" component', () => {
  test('if there is a "h2", with text "About Pokedex"', () => {
    renderWithRouter(<About />);

    const h2Heading = screen.getByRole('heading', {
      name: /about pokédex/i, level: 2 });
    expect(h2Heading).toBeInTheDocument();
  });
  test('if image is on the screen', () => {
    renderWithRouter(<About />);
    const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const imgAbout = screen.getByRole('img', { name: /pokédex/i });

    expect(imgAbout).toBeInTheDocument();
    expect(imgAbout.src).toBe(src);
  });
});
