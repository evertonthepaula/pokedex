import React, { memo } from 'react';
import PropTypes from 'prop-types';
import history from '../../services/history';

import Tag from '../../styles/components/tag';
import TypesIcon from '../../styles/components/typesIcon';

import { Container, Cover, Name, IdNumber } from './styles';

function PokeCard({ pokemon }) {
  const colorType = pokemon.types[0].type.name;

  function linkTo() {
    history.push(`/pokemon/${pokemon.id}`);
  }
  return (
    <Container onClick={linkTo} color={colorType}>
      <div>
        <IdNumber>#{pokemon.id}</IdNumber>

        <Name>{pokemon.name}</Name>

        {pokemon.types.map((item) => (
          <Tag key={item.type.name} color={item.type.name}>
            <TypesIcon className={`-${item.type.name}`} /> {item.type.name}
          </Tag>
        ))}
      </div>

      <span>
        <Cover
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          width="130"
          height="130"
          alt={pokemon.name}
        />
      </span>
    </Container>
  );
}

PokeCard.propTypes = {
  pokemon: PropTypes.shape({
    types: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(PokeCard);
