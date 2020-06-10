import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'reactPokedex',
      storage,
      whitelist: ['pokemons'],
    },
    reducers
  );

  return persistedReducer;
};
