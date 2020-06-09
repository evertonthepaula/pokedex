import React, { memo } from 'react';

import { Container, NavItem } from './styles';

function Menu() {
  return (
    <Container>
      <NavItem className="generation" title="Generation" />
      <NavItem className="sort" title="Sort" />
      <NavItem className="filter" title="Filter" />
    </Container>
  );
}

export default memo(Menu);
