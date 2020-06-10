import styled from 'styled-components';

import sprites from '../../assets/img/icons/sprites-type.png';

const TypesIcon = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-right: 4px;

  &.-bug {
    background: ${`url(${sprites}) -10px -10px`};
  }
  &.-dark {
    background: ${`url(${sprites}) -55px -10px`};
  }
  &.-dragon {
    background: ${`url(${sprites}) -10px -55px`};
  }
  &.-electric {
    background: ${`url(${sprites}) -55px -55px`};
  }
  &.-fairy {
    background: ${`url(${sprites}) -100px -10px`};
  }
  &.-fighting {
    background: ${`url(${sprites}) -100px -55px`};
  }
  &.-fire {
    background: ${`url(${sprites}) -10px -100px`};
  }
  &.-flying {
    background: ${`url(${sprites}) -55px -100px`};
  }
  &.-ghost {
    background: ${`url(${sprites}) -100px -100px`};
  }
  &.-grass {
    background: ${`url(${sprites}) -145px -10px`};
  }
  &.-ground {
    background: ${`url(${sprites}) -145px -55px`};
  }
  &.-ice {
    background: ${`url(${sprites}) -145px -100px`};
  }
  &.-normal {
    background: ${`url(${sprites}) -10px -145px`};
  }
  &.-poison {
    background: ${`url(${sprites}) -55px -145px`};
  }
  &.-psychic {
    background: ${`url(${sprites}) -235px -145px`};
  }
  &.-rock {
    background: ${`url(${sprites}) -235px -190px`};
  }
  &.-steel {
    background: ${`url(${sprites}) -10px -235px`};
  }
  &.-water {
    background: ${`url(${sprites}) -55px -235px`};
  }
`;

export default TypesIcon;
