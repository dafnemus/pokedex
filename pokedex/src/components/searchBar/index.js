import React from 'react';
import PropTypes from 'prop-types';
import iconSearch from '../../assets/icon-search.svg';
import styles from './styles.module.scss';

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.containerForm}>
      <img
        className={styles.logoSearch}
        src={iconSearch}
        alt='lupa buscadora'
      />
      <input
        className={styles.search}
        onChange={onChange}
        placeholder='Procurar'
        value={value}
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  value: '',
  onChange: null,
};

export default SearchBar;
