/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  pokemons: [],
  source: null,
  loading: false,
};

export default function pokemons(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@pokemons/POKEMONS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@pokemons/POKEMONS_LOAD_SUCCESS': {
        draft.pokemons = action.payload.pokemons;
        draft.loading = false;
        break;
      }

      case '@pokemons/POKEMONS_LOAD_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@pokemons/POKEMONS_SET_ACTIVE': {
        draft.pokemons = action.payload.pokemons;
        draft.loading = false;
        break;
      }

      case '@pokemons/POKEMONS_FIND': {
        draft.loading = true;
        break;
      }

      default:
    }
  });
}
