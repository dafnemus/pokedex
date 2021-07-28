import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Pokemon({ order, src, name, onClick, type }) {
  console.log(type[0].type.name)
  return (
    <div type={type} onClick={onClick} className={styles[type[0].type.name]}>
      <p className={styles.order}>#{order}</p>
      <img className={styles.imagePokemon} src={src} alt='pokemon' />
      <h2 className={styles.namePokemon}>{name}</h2>
    </div>
  );
}

Pokemon.propTypes = {
  order: PropTypes.number,
  src: PropTypes.src,
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.array,
};

Pokemon.defaultProps = {
  order: 0,
  src: '',
  name: '',
  onClick: null,
  type: [],
};

export default Pokemon;
