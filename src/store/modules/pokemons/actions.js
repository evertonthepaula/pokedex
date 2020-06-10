export function pokemonsRequest(params = {}) {
  return {
    type: '@pokemons/POKEMONS_REQUEST',
    payload: { params },
  };
}

export function pokemonsLoadSuccess({ pokemons, source = null }) {
  return {
    type: '@pokemons/POKEMONS_LOAD_SUCCESS',
    payload: { pokemons, source },
  };
}

export function pokemonsLoadFailure() {
  return {
    type: '@pokemons/POKEMONS_LOAD_FAILURE',
  };
}

export function pokemonsSetActive(pokemons) {
  return {
    type: '@pokemons/POKEMONS_SET_ACTIVE',
    payload: { pokemons },
  };
}

export function pokemonsFind(params = {}) {
  return {
    type: '@pokemons/POKEMONS_FIND',
    payload: { params },
  };
}
