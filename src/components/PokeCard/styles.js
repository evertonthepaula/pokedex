import styled from 'styled-components';

import pokeball from '../../assets/img/Pokeball-transparent.png';
import cardBackground from '../../assets/img/card-background.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 334px;
  height: 115px;
  margin: 20px;
  padding: 20px;
  border-radius: var(--border-radius);
  background-image: url(${pokeball}), url(${cardBackground});
  background-position: center right, 92px 5px;
  background-repeat: no-repeat, no-repeat;
  background-size: 145px, 74px;
  background-color: var(
    ${(props) =>
      props.color ? `--color-${props.color}-background` : 'transparent'}
  );
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.color ? `10px 28px 33px -29px var(--color-${props.color})` : 'none'};
`;

export const Cover = styled.img`
  transform: translateY(-40px);
`;

export const Name = styled.h3`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  text-transform: capitalize;
  color: #fff;
`;

export const IdNumber = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.4rem;
  color: rgba(23, 23, 27, 0.6);
`;
