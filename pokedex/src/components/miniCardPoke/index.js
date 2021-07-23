import React from 'react';
import PropTypes from 'prop-types';

function MiniCardPoke({ id, name, src }) {
  return (
    <div>
      <p>{id}</p>
      <img src={src} alt='pokemon' />
      <h2>{name}</h2>
    </div>
  );
}

MiniCardPoke.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  src: PropTypes.string,
  key: PropTypes.string,
};

MiniCardPoke.defaultPorps = {
  id: 0,
  name: '',
  src: '',
  key: '',
};

export default MiniCardPoke;
