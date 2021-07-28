import React from 'react';
import PropTypes from 'prop-types';
import iconFilter from '../../assets/arrow-down.svg';
import styles from './styles.module.scss';

function Filter({ onClick, value }) {
  return (
    <div onClick={onClick} className={styles.containFilter}>
      {value ? (
        <a className={styles.filter}>A-Z</a>
      ) : (
        <a className={styles.filter}>#</a>
      )}
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
