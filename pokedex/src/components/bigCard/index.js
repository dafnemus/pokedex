import React from 'react';
import PropTypes from 'prop-types';
import iconRuler from '../../assets/ruler.svg';
import iconWeight from '../../assets/weightScale.svg';
import imageBackPoke from '../../assets/pokeball-transparent.svg';
import iconArrowLeft from '../../assets/arrow-left.svg';
import styles from './styles.module.scss';

function BigCardPokemon({ onClick, poke }) {
  console.log(poke.sprites.other);
  return (
    <div className={styles.containBigCard} onClick={onClick}>
      <div className={styles.containHeader}>
        <img src={iconArrowLeft} alt='arrow left' />
        <h2>{poke.name}</h2>
        <p>#{poke.order}</p>
      </div>
      <img
        className={styles.pokeball}
        src={imageBackPoke}
        alt='pokeball transparent'
      />
      <img
        className={styles.pokemonImage}
        src={poke.sprites.other.dream_world.front_default}
        alt={poke.name}
      />
      <div className={styles.containInfo}>
        {poke.types.map((type) => {
          return <p key={type.type.name}>{type.type.name}</p>;
        })}
        <p>About</p>
        <div>
          <div>
            <img src={iconWeight} alt='weight scale' />
            <p>{poke.weigth}</p>
            <p>Wheight</p>
          </div>
          <div>
            <img src={iconRuler} alt='ruler' />
            <p>{poke.height}</p>
            <p>Height</p>
          </div>
          <div>
            {poke.abilities.map((ability) => {
              return <p key={ability.name}>{ability.name}</p>;
            })}
            <p>Moves</p>
          </div>
        </div>
        <h2>Base Stats</h2>
        <div>
          <p>HP</p>
          <p>{poke.stats[0].base_stat}</p>
          <p>ATK</p>
          <p>{poke.stats[1].base_stat}</p>
          <p>DEF</p>
          <p>{poke.stats[2].base_stat}</p>
          <p>STAK</p>
          <p>{poke.stats[3].base_stat}</p>
          <p>SDEF</p>
          <p>{poke.stats[4].base_stat}</p>
          <p>SPD</p>
          <p>{poke.stats[5].base_state}</p>
        </div>
      </div>
    </div>
  );
}

BigCardPokemon.propTypes = {
  onClick: PropTypes.func,
  poke: PropTypes.array,
};

BigCardPokemon.defaultProps = {
  onClick: null,
  poke: [],
};

export default BigCardPokemon;
