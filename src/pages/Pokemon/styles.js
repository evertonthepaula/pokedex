import styled from 'styled-components';

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
`;

export const Info = styled.header`
  display: flex;
  justify-content: center;
  padding: 25px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  background-color: #fff;
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
