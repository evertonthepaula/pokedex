/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../../services/history';

import Loading from '../../components/Loading';
import Tag from '../../styles/components/tag';
import TypesIcon from '../../styles/components/typesIcon';

import {
  Container,
  Header,
  Back,
  Image,
  IdNumber,
  Name,
  Info,
  Subtitle,
  DefinitionList,
} from './styles';

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
    setPokemon(poke);
    setColorType(poke.types[0].type.name);
    setLoad(false);
  }, [id, pokemons]);

  return (
    <Container color={colorType}>
      {load && <Loading />}

      {pokemon && (
        <>
          <Header>
            <Back onClick={() => history.goBack()} />

            <Image
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
              width="130"
              height="130"
              alt={pokemon.name}
            />

            <div>
              <IdNumber>#{pokemon.id}</IdNumber>

              <Name>{pokemon.name}</Name>

              {pokemon.types.map((item) => (
                <Tag key={item.type.name} color={item.type.name}>
                  <TypesIcon className={`bg-${item.type.name}`} />
                  {item.type.name}
                </Tag>
              ))}
            </div>
          </Header>

          <Info>
            <Subtitle color={colorType}>Pokédex Data</Subtitle>

            <DefinitionList>
              <dt>Species</dt>
              <dd> Empty </dd>
              <dt>Height</dt>
              <dd>{(pokemon.height * 0.1).toFixed(2)}m</dd>
              <dt>Weight</dt>
              <dd>{(pokemon.weight * 0.1).toFixed(1)}Kg</dd>
              <dt>Abilities</dt>
              <dd>
                {pokemon.abilities.map(({ ability, is_hidden }) => (
                  <>
                    {ability.name} {is_hidden && '(Hidden Ability)'} <br />
                  </>
                ))}
              </dd>
            </DefinitionList>

            <Subtitle color={colorType}>Training</Subtitle>

            <DefinitionList>
              <dt>Base Exp</dt>
              <dd>{pokemon.base_experience}</dd>
            </DefinitionList>

            <Subtitle color={colorType}>Base Stats</Subtitle>

            <DefinitionList>
              {pokemon.stats.map((item) => (
                <>
                  <dt>{item.stat.name}</dt>
                  <dd>{item.base_stat}</dd>
                </>
              ))}
            </DefinitionList>
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
