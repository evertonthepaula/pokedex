import styled from 'styled-components';

import menuSprites from '../../assets/img/icons/sprites-menu.png';

export const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 40px 0;
`;

export const NavItem = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background: url(${menuSprites}) center top no-repeat;
  cursor: pointer;

  &.generation {
    background-position: 0 0;
  }
  &.sort {
    background-position: -44px 0;
  }
  &.filter {
    background-position: -88px 0;
  }
`;
