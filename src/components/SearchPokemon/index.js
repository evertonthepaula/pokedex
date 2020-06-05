import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Intro, Form, InputWrapper, Input, Info } from './styles';

import { pokemonsFind } from '../../store/modules/pokemons/actions';

function SearchPokemons() {
  const load = useSelector((state) => state.pokemons.loading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
    }),
    onSubmit: async ({ name }) => {
      await dispatch(pokemonsFind({ name }));
    },
  });
  return (
    <>
      <Intro>
        Search for Pokémon by name or using the National Pokédex number.
      </Intro>

      <Form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            status={formik.errors.name}
            disabled={load}
            placeholder={
              formik.errors.name
                ? 'Field Required'
                : 'What Pokémon are you looking for?'
            }
          />
          <Info>{formik.errors.name ? 'Valor obrigatório' : ''}</Info>
        </InputWrapper>
      </Form>
    </>
  );
}

export default memo(SearchPokemons);
