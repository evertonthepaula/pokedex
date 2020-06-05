import styled from 'styled-components';

import sprites from '../../assets/img/icons/sprites-type.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 334px;
  height: 115px;
  margin: 20px;
  padding: 20px;
  border-radius: var(--border-radius);
  background-color: var(
    ${(props) =>
      props.color ? `--color-${props.color}-background` : 'transparent'}
  );
  box-sizing: border-box;
  cursor: pointer;
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
  font-size: 12px;
  line-height: 14px;

  color: rgba(23, 23, 27, 0.6);
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
