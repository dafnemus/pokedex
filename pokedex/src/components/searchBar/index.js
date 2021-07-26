import React, { useState } from 'react';
import iconSearch from '../../assets/icon-search.svg';
import styles from './styles.module.scss'

function SearchBar() {
  const [form, setForm] = useState({
    namePokemon: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm((lastForm) => ({ ...lastForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.containForm} onSubmit={handleSubmit}>
      <img className={styles.logoSearch} src={iconSearch} alt='lupa buscadora' />
      <input
        className={styles.search}
        name='namePokemon'
        onChange={handleChange}
        placeholder='Procurar'
        value={form.namePokemon}
      />
    </form>
  );
}

export default SearchBar;
