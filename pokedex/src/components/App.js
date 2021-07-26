import React from 'react';
import './App.css';
import logoPoke from '../assets/pokeball-logo.svg';
import Filter from './filter/index';
import SearchBar from './searchBar/index';
import ContainMainCards from './containMinCards';
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.mainContain}>
      <div className={styles.containHeader}>
        <div className={styles.containLogo}>
          <img src={logoPoke} alt='Logo Pokemon' />
          <h1 className={styles.title}>Pokédex</h1>
        </div>
        <Filter />
      </div>
      <SearchBar />
      <ContainMainCards />
    </div>
  );
}

export default App;
