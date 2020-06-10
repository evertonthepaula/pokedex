import React from 'react';

import { Dots, Buble } from '../../styles/components/dots';
import { Container, Image, Info } from './styles';

export default function Loading() {
  return (
    <Container>
      <Image />
      <Info>
        Buscando{' '}
        <Dots>
          <Buble />
          <Buble />
          <Buble />
        </Dots>
      </Info>
    </Container>
  );
}
