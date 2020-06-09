import styled, { css } from 'styled-components';

import searchIcon from '../../assets/img/icons/search.png';

const status = {
  default: css`
    border-color: var(--color-snow);
    color: var(--color-smoke-light);

    ::placeholder {
      color: var(--color-smoke-light);
    }
  `,

  Required: css`
    border-color: var(--color-red-dark);
    box-shadow: 0 0 0 1px inset var(--color-red-dark);
    color: var(--color-red-dark);

    &:focus {
      outline: solid 1px var(--color-red-dark);
    }
    ::placeholder {
      color: var(--color-red-dark);
    }
  `,
};

export const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 4px 0 50px;
  position: relative;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  background: url(${searchIcon}) no-repeat var(--color-snow);
  background-position: 20px;
  font-size: 1.6rem;
  text-transform: lowercase;

  ${(props) => status[props.status || 'default']}

  &[disabled] {
    color: var(--color-smoke);
    background-color: var(--color-snow);
    border-color: var(--color-dark-snow);
    cursor: not-allowed;
    opacity: 0.4;

    &:hover {
      color: var(--color-smoke);
      background-color: var(--color-snow);
      border-color: var(--color-dark-snow);
      cursor: not-allowed;
      opacity: 0.4;
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  }
`;

export const Form = styled.form`
  margin: 16px 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    margin: 4px 0 0;
  }
`;

export const InputWrapper = styled.div`
  flex: 1 1 400px;
  margin-right: 8px;
`;

export const Intro = styled.div`
  font-size: 1.6rem;
  color: #747476;
`;

export const Info = styled.small`
  display: block;
  height: 16px;
  padding: 5px;
`;
