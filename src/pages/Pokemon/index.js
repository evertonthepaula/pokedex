import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../../services/history';

import Loading from '../../components/Loading';

import { Container, Header, Back, Tag, Icon, Info } from './styles';

function PokemonPage({
  match: {
    params: { id },
  },
}) {
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const [pokemon, setPokemon] = useState(null);
  const [colorType, setColorType] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const poke = pokemons.find((element) => element.id === Number(id));
    setColorType(poke.types[0].type.name);
    setPokemon(poke);
    setLoad(false);
  }, [id, pokemons]);

  return (
    <Container color={colorType}>
      {load && <Loading />}

      {pokemon && (
        <>
          <Header>
            <Back onClick={() => history.goBack()} />

            <span>
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                width="130"
                height="130"
                alt={pokemon.name}
              />
            </span>

            <div>
              <span>#{pokemon.id}</span>
              <h1>{pokemon.name}</h1>

              {pokemon.types.map((item) => (
                <Tag key={item.type.name} color={item.type.name}>
                  {' '}
                  <Icon className={`bg-${item.type.name}`} /> {item.type.name}
                </Tag>
              ))}
            </div>
          </Header>

          <Info>
            {pokemon.abilities.map(({ ability }) => (
              <p>Abilities: {ability.name}</p>
            ))}
            {pokemon.stats.map((item) => (
              <p>
                <b>{item.stat.name}</b>: {item.base_stat}
              </p>
            ))}
          </Info>
        </>
      )}
    </Container>
  );
}

PokemonPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default PokemonPage;
