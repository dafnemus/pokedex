import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

function ContainMainCards() {
  const [infoPoke, setInfoPoke] = useState({ data: [] });
  const [pokemon, setPokemon] = useState({ info: [] });

  const getPokemon = async (pokemon) => {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    setPokemon((last) => ({ ...last, info: [...last.info, res.data] }));
  };

  useEffect(() => {
    listPokemons();
    infoPoke.data.forEach((idPokemon) => getPokemon(idPokemon.name));
  }, []);

  const listPokemons = async () => {
    const res = await axios('https://pokeapi.co/api/v2/pokemon');
    setInfoPoke({ data: res.data.results });
  };

  return (
    <div className={styles.containCards}>
      {pokemon.info.map((poke) => {
        return (
          <div key={poke.order} className={styles.card}>
            <p className={styles.order} key={poke.order}>
              #{poke.order}
            </p>
            <img
              className={styles.imagePokemon}
              key={poke.sprites.front_default}
              src={poke.sprites.front_default}
              alt='pokemon'
            />
            <h2 className={styles.namePokemon} key={poke.name}>
              {poke.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default ContainMainCards;
