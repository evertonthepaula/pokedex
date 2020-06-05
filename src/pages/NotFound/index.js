import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Title, Info } from './styles';

import img404 from '../../assets/img/404.gif';

export default function NotFound() {
  return (
    <Container>
      <Title>Ops! Parece que algo deu errado!</Title>
      <img src={img404} alt="404" />
      <Info>
        Não encontramos o conteúdo que você está procurando. <br /> Por favor,
        tente recarregar a pagina novamente ou{' '}
        <Link to="/">volte para a pagina inicial</Link>.
      </Info>
    </Container>
  );
}
