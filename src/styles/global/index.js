import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import settings from './settings';
import normalize from './normalize';
import typography from './typography';

export default createGlobalStyle`
  ${settings}
  ${normalize}
  ${typography}

  .Toastify__toast {
    font-size: 1.4rem;
  }
`;
