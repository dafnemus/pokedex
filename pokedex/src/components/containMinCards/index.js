import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Pokemon from '../cuadrilla/index';

function ContainMainCards({ onClick, pokemons }) {
  return (
    <div className={styles.containCards}>
      {pokemons.map((poke) => {
        return (
          <Pokemon
            key={poke.order}
            order={poke.order}
            name={poke.name}
            src={poke.sprites.front_default}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

ContainMainCards.propTypes = {
  onClick: PropTypes.func,
  pokemons: PropTypes.array,
};

ContainMainCards.propDefault = {
  onClick: null,
  pokemons: [],
};

export default ContainMainCards;
