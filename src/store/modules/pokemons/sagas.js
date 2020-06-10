import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { pokemonsLoadSuccess, pokemonsLoadFailure } from './actions';
import ServicePokemons from '../../../services/pokeapi/pokemon';

// eslint-disable-next-line consistent-return
export function* load({ payload }) {
  try {
    const holdState = yield select();
    const { params } = payload;

    if (JSON.stringify(params) === JSON.stringify(holdState.pokemons.source)) {
      yield put(pokemonsLoadFailure());
      return false;
    }

    const response = yield call(ServicePokemons.get, { params });

    const promises = response.results.map((item) =>
      call(ServicePokemons.find, { name: item.name })
    );

    const pokemons = yield all(promises);

    yield put(pokemonsLoadSuccess({ pokemons, source: params }));
  } catch (err) {
    toast.error('Falha na busca dos dados!');
    yield put(pokemonsLoadFailure());
  }
}

export function* find({ payload }) {
  try {
    const { name, id } = payload.params;

    const pokemon = yield call(ServicePokemons.find, { name, id });

    yield put(pokemonsLoadSuccess({ pokemons: [pokemon] }));
  } catch (err) {
    toast.error('Pokemon not found!');
    yield put(pokemonsLoadFailure());
  }
}

export default all([
  takeLatest('@pokemons/POKEMONS_REQUEST', load),
  takeLatest('@pokemons/POKEMONS_FIND', find),
]);
