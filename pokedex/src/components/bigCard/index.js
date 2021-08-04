import React from 'react';
import PropTypes from 'prop-types';
import iconRuler from '../../assets/ruler.svg';
import iconWeight from '../../assets/weightScale.svg';
import imageBackPoke from '../../assets/pokeball-transparent.svg';
import iconArrowLeft from '../../assets/arrow-left.svg';
import styles from './styles.module.scss';

function BigCard({ onClick, poke }) {
  return (
    <div className={styles[poke.types[0].type.name]} >
      <div className={styles.containerHeader}>
        <img onClick={onClick}  className={styles.arrow} src={iconArrowLeft} alt='arrow left' />
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
      <div className={styles.containerInfo}>
        <div className={styles.containerTypes}>
        <p className={styles.type}>{poke.types[0].type.name}</p>
        </div>
        <p className={styles.titleAbout}>About</p>
        <div className={styles.containerAbout}>
          <div>
            <p className={styles.containerIcon}>
              <img src={iconWeight} alt='weight scale' />
              {poke.weight} kg
            </p>
            <p className={styles.subTitleAbout}>Wheight</p>
          </div>
          <hr className={styles.dividerAbout} />
          <div>
            <p className={styles.containerIcon}>
              <img src={iconRuler} alt='ruler icon' />
              {poke.height} m
            </p>
            <p className={styles.subTitleAbout}>Height</p>
          </div>
          <hr className={styles.dividerAbout} />
          <div>
            {poke.abilities.map((ability) => {
              return <p key={ability.ability.name}>{ability.ability.name}</p>;
            })}
            <p className={styles.subTitleAbout}>Moves</p>
          </div>
        </div>
        <h2 className={styles.titleBase}>Base Stats</h2>
        <div className={styles.containerStats}>
          <p className={styles.stat}>HP</p>
          <p>{poke.stats[0].base_stat}</p>
          <span className={styles.progressBar} style={{width: poke.stats[0].base_stat}}></span>
          <p className={styles.stat}>ATK</p>
          <p>{poke.stats[1].base_stat}</p>
          <span className={styles.progressBar} style={{width: poke.stats[1].base_stat}}></span>
          <p className={styles.stat}>DEF</p>
          <p>{poke.stats[2].base_stat}</p>
          <span className={styles.progressBar} style={{width: poke.stats[2].base_stat}}></span>
          <p className={styles.stat}>STAK</p>
          <p>{poke.stats[3].base_stat}</p>
          <span className={styles.progressBar} style={{width: poke.stats[3].base_stat}}></span>
          <p className={styles.stat}>SDEF</p>
          <p>{poke.stats[4].base_stat}</p>
          <span className={styles.progressBar} style={{width: poke.stats[4].base_stat}}></span>
          <p className={styles.stat}>SPD</p>
          <p>{poke.stats[5].base_stat}</p>
          <span className={styles.progressBar} style={{width: poke.stats[5].base_stat}}></span>
        </div>
      </div>
    </div>
  );
}

BigCard.propTypes = {
  onClick: PropTypes.func,
  poke: PropTypes.array,
};

BigCard.defaultProps = {
  onClick: null,
  poke: [],
};

export default BigCard;
