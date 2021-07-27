import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Pokemon({ order, src, name, onClick }) {
  return (
    <div onClick={onClick} className={styles.card}>
      <p className={styles.order}>#{order}</p>
      <img
        className={styles.imagePokemon}
        src={src}
        alt='pokemon'
      />
      <h2 className={styles.namePokemon}>{name}</h2>
    </div>
  );
}

Pokemon.propTypes = {
  order: PropTypes.number,
  src: PropTypes.src,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Pokemon.defaultProps = {
  order: 0,
  src: '',
  name: '',
  onClick: null,
};

export default Pokemon;
