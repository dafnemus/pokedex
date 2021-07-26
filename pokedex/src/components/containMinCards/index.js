import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ContainMainCards() {
  const [infoPoke, setInfoPoke] = useState({ data: [] });
  const [pokemon, setPokemon] = useState({ info: [] });

  const getPokemon = async (pokemon) => {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    setPokemon((last) => ({ ...last, info: [...last.info, res.data] }));
  };
  useEffect(() => {
    listPokemons();
    infoPoke.data.forEach((idPokemon) => {
      getPokemon(idPokemon.name);
    });
  }, []);

  const listPokemons = async () => {
    const res = await axios('https://pokeapi.co/api/v2/pokemon');
    setInfoPoke({ data: res.data.results });
  };

  return (
    <div>
      {pokemon.info.map((poke) => {
        return (
          <div key={poke.order}>
            <h3 key={poke.order}>{poke.order}</h3>
            <img
              key={poke.sprites.front_default}
              src={poke.sprites.front_default}
              alt='pokemon'
            />
            <h2 key={poke.name}>{poke.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default ContainMainCards;
