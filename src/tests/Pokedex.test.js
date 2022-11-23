import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('test Pokedex Page and its elements', () => {
  test('if page has "Encountered Pokémon"', () => {
    renderWithRouter(<App />);
    const pokemonEncouterEl = screen.getByRole('heading', {
      name: /encountered pokémon/i, level: 2 });
    expect(pokemonEncouterEl).toBeInTheDocument();
  });

  test('for button "Proximo Pokemon" and if pokemon renders', () => {
    renderWithRouter(<App />);
    const nextPokemonBtn = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextPokemonBtn).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);
  });

  test('if button "Eletric" renders', () => {
    renderWithRouter(<App />);
    const electricBtn = screen.getByRole('button', { name: /electric/i });
    expect(electricBtn).toBeInTheDocument();
    userEvent.click(electricBtn);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  });

  test('if button "Fire" renders', () => {
    renderWithRouter(<App />);

    const fireBtn = screen.getByRole('button', { name: /fire/i });
    expect(fireBtn).toBeInTheDocument();

    userEvent.click(fireBtn);
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();

    const nextPokemonBtn = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(nextPokemonBtn);
    expect(screen.getByText(/rapidash/i)).toBeInTheDocument();
  });

  test('if button "Bug" renders', () => {
    renderWithRouter(<App />);

    const bugBtn = screen.getByRole('button', { name: /bug/i });

    expect(bugBtn).toBeInTheDocument();
    userEvent.click(bugBtn);
    expect(screen.getByText(/caterpie/i)).toBeInTheDocument();
  });

  test('if button "Poison" renders', () => {
    renderWithRouter(<App />);

    const poisonBtn = screen.getByRole('button', { name: /poison/i });

    expect(poisonBtn).toBeInTheDocument();
    userEvent.click(poisonBtn);
    expect(screen.getByText(/ekans/i)).toBeInTheDocument();
  });

  test('if button "Psychic" renders', () => {
    renderWithRouter(<App />);

    const psychicBtn = screen.getByRole('button', { name: /psychic/i });
    expect(psychicBtn).toBeInTheDocument();

    userEvent.click(psychicBtn);
    expect(screen.getByText(/alakazam/i)).toBeInTheDocument();

    const nextPokemonBtn = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(nextPokemonBtn);
    expect(screen.getByText(/mew/i)).toBeInTheDocument();
  });

  test('if button "Normal" renders', () => {
    renderWithRouter(<App />);

    const normalBtn = screen.getByRole('button', { name: /normal/i });
    expect(normalBtn).toBeInTheDocument();

    userEvent.click(normalBtn);
    expect(screen.getByText(/snorlax/i));
  });

  test('if button "Dragon" renders', () => {
    renderWithRouter(<App />);

    const dragonBtn = screen.getByRole('button', { name: /dragon/i });
    expect(dragonBtn).toBeInTheDocument();

    userEvent.click(dragonBtn);
    expect(screen.getByText(/dragonair/i)).toBeInTheDocument();
  });

  test('if "All" button, and buttons by testId renders', () => {
    renderWithRouter(<App />);

    const allBtn = screen.getByRole('button', { name: /all/i });
    expect(allBtn).toBeInTheDocument();
    userEvent.click(allBtn);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();

    const allBtns = screen.getAllByTestId('pokemon-type-button');
    expect(allBtns[0]).toBeInTheDocument();
    expect(allBtns[1]).toBeInTheDocument();
    expect(allBtns[2]).toBeInTheDocument();
    expect(allBtns[3]).toBeInTheDocument();
    expect(allBtns[4]).toBeInTheDocument();
    expect(allBtns[5]).toBeInTheDocument();
    expect(allBtns[6]).toBeInTheDocument();
  });
});
