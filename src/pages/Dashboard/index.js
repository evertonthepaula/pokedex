import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchPokemon from '../../components/SearchPokemon';
import EmptyResult from '../../components/EmptyResult';
import PokeCard from '../../components/PokeCard';
import Loading from '../../components/Loading';
import Menu from '../../components/Menu';

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
        <Menu />
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
