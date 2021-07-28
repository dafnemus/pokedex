import React from 'react';
import PropTypes from 'prop-types';
import iconRuler from '../../assets/ruler.svg';
import iconWeight from '../../assets/weightScale.svg';
import imageBackPoke from '../../assets/pokeball-transparent.svg';
import iconArrowLeft from '../../assets/arrow-left.svg';
import styles from './styles.module.scss';

function BigCardPokemon({
  onClick,
  name,
  order,
  src,
  weigth,
  height,
  moves,
  hp,
  atk,
  def,
  stack,
  sdef,
  spd,
}) {
  return (
    <div className={styles.containBigCard} onClick={onClick}>
      <div className={styles.containHeader}>
        <img src={iconArrowLeft} alt='arrow left' />
        <h2>{name} pokemon</h2>
        <p>#{order}</p>
      </div>
      <img
        className={styles.pokeball}
        src={imageBackPoke}
        alt='pokeball transparent'
      />
      <img className={styles.pokemonImage} src={src} alt={name} />
      <div className={styles.containInfo}>
          <p>About</p>
        <div>
          <div>
            <img src={iconWeight} alt='weight scale' />
            <p>{weigth}</p>
            <p>Wheight</p>
          </div>
          <div>
            <img src={iconRuler} alt='ruler' />
            <p>{height}</p>
            <p>Height</p>
          </div>
          <div>
            <p>{moves}</p>
            <p>Moves</p>
          </div>
        </div>
        <h2>Base Stats</h2>
        <div>
          <p>HP</p>
          <p>{hp}</p>
          <p>ATK</p>
          <p>{atk}</p>
          <p>DEF</p>
          <p>{def}</p>
          <p>STAK</p>
          <p>{stack}</p>
          <p>SDEF</p>
          <p>{sdef}</p>
          <p>SPD</p>
          <p>{spd}</p>
        </div>
      </div>
    </div>
  );
}

BigCardPokemon.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  order: PropTypes.number,
  src: PropTypes.string,
  weigth: PropTypes.number,
  height: PropTypes.number,
  moves: PropTypes.string,
  hp: PropTypes.number,
  atk: PropTypes.number,
  def: PropTypes.number,
  stack: PropTypes.number,
  sdef: PropTypes.number,
  spd: PropTypes.number,
};

BigCardPokemon.defaultProps = {
  onClick: null,
  name: '',
  order: 0,
  src: '',
  weigth: 0,
  height: 0,
  moves: '',
  hp: 0,
  atk: 0,
  def: 0,
  stack: 0,
  sdef: 0,
  spd: 0,
};

export default BigCardPokemon;
