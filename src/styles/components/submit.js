import styled from 'styled-components';

import Button from './button';

const Submit = styled(Button).attrs({
  type: 'submit',
})`
  color: var(--color-white);
  background-color: var(--color-purple);
  border-color: var(--color-purple);

  &:hover {
    background-color: var(--color-purple-dark);
    border-color: var(--color-purple-dark);
  }
  &:focus {
    outline: solid 1px var(--color-purple-dark);
  }
`;

export default Submit;
