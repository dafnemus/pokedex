import React,  { useEffect, useState }  from 'react';
import axios from 'axios';
import logoPoke from '../assets/pokeball-logo.svg';
import Filter from './filter/index';
import SearchBar from './searchBar/index';
import ContainMainCards from './containMinCards';
import styles from './styles.module.scss'

function App() {
  const [pokemon, setPokemon] = useState({ info: [] });
  // const [bigCardPoke, setBigCardPoke] = useState(false);

  const getPokemon = async (pokemon) => {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    setPokemon((last) => ({ ...last, info: [...last.info, res.data] }));
  };

  useEffect(async () => {
    const res = await axios('https://pokeapi.co/api/v2/pokemon');
    res.data.results.forEach((idPokemon) => getPokemon(idPokemon.name));
  }, []);
  return (
    <div className={styles.mainContain}>
      <div className={styles.containHeader}>
        <div className={styles.containLogo}>
          <img src={logoPoke} alt='Logo Pokemon' />
          <h1 className={styles.title}>Pokédex</h1>
        </div>
        <Filter />
      </div>
      <SearchBar />
      <ContainMainCards pokemons={pokemon} />
    </div>
  );
}

export default App;
