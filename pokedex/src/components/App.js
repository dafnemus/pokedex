import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logoPoke from '../assets/pokeball-logo.svg';
import Filter from './filter/index';
import SearchBar from './searchBar/index';
import ContainMainCards from './containMinCards';
import styles from './styles.module.scss';
import BigCardPokemon from './bigCard';

function App() {
  const [pokemon, setPokemon] = useState({ info: [], isOpen: false });
  const [stateFilter, setStateFilter] = useState(false)

  const getPokemon = async (pokemon) => {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    setPokemon((last) => ({ ...last, info: [...last.info, res.data] }));
  };

  useEffect(async () => {
    const res = await axios('https://pokeapi.co/api/v2/pokemon?limit=100');
    res.data.results.forEach((idPokemon) => getPokemon(idPokemon.name));
  }, []);

  const openModal = () => {
    setPokemon({ ...pokemon, isOpen: true });
  };

  const closeModal = () => {
    setPokemon({ ...pokemon, isOpen: false });
  };

  const sortAlphabet = () => {
    if(stateFilter === false) {
      setStateFilter(true)
    } else {
      setStateFilter(false)
    }
  }
  return (
    <div className={styles.mainContain}>
      <div className={styles.containHeader}>
        <div className={styles.containLogo}>
          <img src={logoPoke} alt='Logo Pokemon' />
          <h1 className={styles.title}>Pokédex</h1>
        </div>
        <Filter value={stateFilter} onClick={sortAlphabet} />
      </div>
      <SearchBar />
      {pokemon.isOpen ? (
        <BigCardPokemon onClick={closeModal} />
      ) : (
        <ContainMainCards onClick={openModal} value={stateFilter} pokemons={pokemon.info} />
      )}
    </div>
  );
}

export default App;
