import React from 'react';
import './App.css';
import logoPoke from '../assets/pokeball-logo.svg'
import Filter from './filter/index';
import SearchBar from './searchBar/index'
import ContainMainCards from './containMinCards';

function App() {
  return <div>
    <div>
      <div>
      <img src={logoPoke} alt='Logo Pokemon' />
      <h1>Pokédex</h1>
      </div>
      <Filter />
    </div>
    <SearchBar />
    <ContainMainCards />
  </div>;
}

export default App;
