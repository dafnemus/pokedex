import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import BigCardPokemon from '../bigCard/index';

function Pokemon({ poke }) {
  const [pokemon, setPokemon] = useState(false);

  const openModal = () => setPokemon(true);

  const closeModal = () => setPokemon(false);

  return (
    <div>
      {pokemon ? (
        <BigCardPokemon onClick={closeModal} poke={poke}/>
      ) : (
        <div onClick={openModal} className={styles[poke.types[0].type.name]}>
          <p className={styles.order}>#{poke.order}</p>
          <img
            className={styles.imagePokemon}
            src={poke.sprites.other.dream_world.front_default}
            alt='pokemon'
          />
          <h2 className={styles.namePokemon}>{poke.name}</h2>
        </div>
      )}
    </div>
  );
}

Pokemon.propTypes = {
  poke: PropTypes.array,
};

Pokemon.defaultProps = {
  pok: [],
};

export default Pokemon;
