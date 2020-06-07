import styled from 'styled-components';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import sprites from '../../assets/img/icons/sprites-type.png';

export const Container = styled.div`
  background-color: var(
    ${(props) =>
      props.color ? `--color-${props.color}-background` : 'transparent'}
  );
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  min-height: 400px;
  flex-wrap: wrap;
`;

export const Back = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 8%;
  left: 8%;
  font-size: 4rem;
  color: #fff;
  cursor: pointer;
`;

export const Image = styled.img`
  margin: 0 20px;
`;

export const IdNumber = styled.span`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: rgba(23, 23, 27, 0.6);
`;

export const Name = styled.h1`
  display: block;
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 38px;
  text-transform: capitalize;
  color: #fff;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  flex: 1 1 60px;
  height: 25px;
  margin: 2px;
  padding: 5px;
  background-color: var(
    ${(props) => (props.color ? `--color-${props.color}` : 'transparent')}
  );
  border-radius: 3px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
`;

export const Icon = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-right: 4px;

  &.bg-bug {
    background: ${`url(${sprites}) -10px -10px`};
  }
  &.bg-dark {
    background: ${`url(${sprites}) -55px -10px`};
  }
  &.bg-dragon {
    background: ${`url(${sprites}) -10px -55px`};
  }
  &.bg-electric {
    background: ${`url(${sprites}) -55px -55px`};
  }
  &.bg-fairy {
    background: ${`url(${sprites}) -100px -10px`};
  }
  &.bg-fighting {
    background: ${`url(${sprites}) -100px -55px`};
  }
  &.bg-fire {
    background: ${`url(${sprites}) -10px -100px`};
  }
  &.bg-flying {
    background: ${`url(${sprites}) -55px -100px`};
  }
  &.bg-ghost {
    background: ${`url(${sprites}) -100px -100px`};
  }
  &.bg-grass {
    background: ${`url(${sprites}) -145px -10px`};
  }
  &.bg-ground {
    background: ${`url(${sprites}) -145px -55px`};
  }
  &.bg-ice {
    background: ${`url(${sprites}) -145px -100px`};
  }
  &.bg-normal {
    background: ${`url(${sprites}) -10px -145px`};
  }
  &.bg-poison {
    background: ${`url(${sprites}) -55px -145px`};
  }
  &.bg-psychic {
    background: ${`url(${sprites}) -235px -145px`};
  }
  &.bg-rock {
    background: ${`url(${sprites}) -235px -190px`};
  }
  &.bg-steel {
    background: ${`url(${sprites}) -10px -235px`};
  }
  &.bg-water {
    background: ${`url(${sprites}) -55px -235px`};
  }
`;

export const Info = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  background-color: #fff;
`;

export const Subtitle = styled.h3`
  margin: 10px 0;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;
  color: var(
    ${(props) => (props.color ? `--color-${props.color}` : '#000000')}
  );
`;

export const DefinitionList = styled.dl`
  width: 100%;

  & > dt {
    float: left;
    width: 50%;
    padding: 0;
    margin: 10px 0;
    font-size: 1.2rem;
    line-height: 19px;
    font-weight: 700;
    text-transform: capitalize;
  }
  & > dd {
    float: right;
    width: 50%;
    padding: 0;
    margin: 10px 0;
    font-size: 1.6rem;
    line-height: 19px;
  }
`;
