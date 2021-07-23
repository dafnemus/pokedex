import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MiniCardPoke from '../miniCardPoke';

function ContainMainCards() {
  const [infoPoke, setInfoPoke] = useState([]);

  useEffect(() => {
    listPokemons();
  }, []);

  const listPokemons = async () => {
    const res = await axios('https://pokeapi.co/api/v2/pokemon/');
    setInfoPoke(res.data.results);
    console.log(res.data.results);
    console.log(infoPoke);
  };

  return (
    <div>
      {infoPoke.map((poke) => {
        return (
          <div key={poke.id}>
            <MiniCardPoke id={poke.id} name={poke.name} />;
          </div>
        );
      })}
    </div>
  );
}

export default ContainMainCards;
