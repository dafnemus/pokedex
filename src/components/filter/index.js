import React from 'react';
import PropTypes from 'prop-types';
import iconFilter from '../../assets/arrow-down.svg';
import styles from './styles.module.scss';

function Filter({ onClick, value }) {
  return (
    <div onClick={onClick} className={styles.containerFilter}>
      <a className={styles.filter}>{`${value ? 'A-Z' : '#'}`}</a>
      <img src={iconFilter} alt='filtro' />
    </div>
  );
}

Filter.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.bool,
};

Filter.defaultProps = {
  onClick: null,
  value: false,
};

export default Filter;
