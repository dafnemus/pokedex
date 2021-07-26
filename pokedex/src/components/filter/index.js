import React from 'react';
import iconFilter from '../../assets/arrow-down.svg';
import styles from './styles.module.scss'

function Filter() {
  return (
    <div className={styles.containFilter}>
      <a className={styles.filter}>#</a>
      <img src={iconFilter} alt='filtro' />
    </div>
  );
}

export default Filter;
