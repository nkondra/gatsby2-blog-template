import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import gatsbyLogo from '../images/gatsby-icon.png';

const HeaderWrapper = styled.div`
  background: #0b3c5d;
`;

const HeaderThing = styled.div`
  margin: 0 auto;
  // max-width: 960px;
  padding: 0.5rem;
  img {
    margin-bottom: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderThing>
      <Link to="/">
        <img
          style={{
            width: 50,
          }}
          src={gatsbyLogo}
          alt={siteTitle}
        />
      </Link>
    </HeaderThing>
  </HeaderWrapper>
);

export default Header;
