import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Pokemon from '../cuadrilla/index';

function ContainMainCards({ onClick, pokemons, value }) {
  value
    ? pokemons.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    : pokemons.sort((a, b) => {
        if (a.order < b.order) {
          return -1;
        }
        if (a.order > b.order) {
          return 1;
        }
        return 0;
      });

  return (
    <div className={styles.containCards}>
      {pokemons.map((poke) => {
        return (
          <Pokemon
            type={poke.types}
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
  value: PropTypes.bool,
};

ContainMainCards.defaultProps = {
  onClick: null,
  pokemons: [],
  value: false,
};

export default ContainMainCards;
