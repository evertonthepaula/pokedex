import styled from 'styled-components';

import pokeball from '../../assets/img/pokeball-half.png';

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 8px;
  background: url(${pokeball}) center top no-repeat;
`;

export const Header = styled.header`
  margin: 0 20px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
  color: #17171b;
  margin: 10px 0;
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
