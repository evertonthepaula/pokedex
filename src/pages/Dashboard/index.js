import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../../components/Loading';

import EmptyResult from '../../components/EmptyResult';
import SearchPokemon from '../../components/SearchPokemon';
import PokeCard from '../../components/PokeCard';

import { pokemonsRequest } from '../../store/modules/pokemons/actions';

import { Container, Header, Title, Result } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.pokemons.loading);
  const pokemons = useSelector((state) => state.pokemons.pokemons);

  useEffect(() => {
    dispatch(pokemonsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <Title>POKÉDEX</Title>

        <SearchPokemon />
      </Header>

      {load && <Loading />}

      {!load && pokemons.length === 0 && <EmptyResult />}

      {!load && (
        <Result>
          {pokemons.map((item) => (
            <PokeCard key={item.id} pokemon={item} />
          ))}
        </Result>
      )}
    </Container>
  );
}
