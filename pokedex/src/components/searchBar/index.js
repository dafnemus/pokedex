import React, { useState } from 'react';
import iconSearch from '../../assets/icon-search.svg';

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
    <form onSubmit={handleSubmit}>
      <img src={iconSearch} alt='lupa buscadora' />
      <input
        name='namePokemon'
        onChange={handleChange}
        placeholder='Procurar'
        value={form.namePokemon}
      />
    </form>
  );
}

export default SearchBar;
