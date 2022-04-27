import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Menu = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;

  background: var(--colour-black);
  color: var(--colour-white);

  transform: ${(props) => (props.display ? 'none' : 'translateX(100%)')};
  transition: 0.5s;

  z-index: 1;
`;

const MenuContainer = styled.div`
  padding: 40px;
`;

const IconContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: auto;
`;

const NavLinkWrapper = styled.ul`
  margin-bottom: 50px;
  list-style-type: none;
  padding: 0;
  margin: 0;

  & > li {
    margin-bottom: 1.5rem;
  }
`;

const Link = styled(NavLink)`
  font-family: var(--font-secondary);
  font-size: var(--text-lg);
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--colour-white);
`;

const Footer = styled.div`
  margin-top: 100px;
`;

function NavMenu(props) {
  const links = props.links;
  // Find index of home link
  const homeLinkIndex = links.findIndex((link) => link[0] == '/');

  // If not first link, swap with first link
  if (homeLinkIndex != 0) {
    // Get home link element
    const homeLink = links[homeLinkIndex];

    // Move home link element to front
    links.sort(function (x, y) {
      return x == homeLink ? -1 : y == homeLink ? 1 : 0;
    });

    // Rename link name
    links[0][1] = 'Home';
  }

  return (
    <Menu display={props.display}>
      <MenuContainer>
        <IconContainer>
          <Icon icon={faX} size="lg" onClick={() => props.toggleMenu(false)} />
        </IconContainer>
        <NavLinkWrapper>
          {links.map((link) => {
            const linkPath = link[0];
            const linkName = link[1];

            return (
              <li key={linkName}>
                <Link to={linkPath} onClick={() => props.toggleMenu(false)}>
                  {linkName}
                </Link>
              </li>
            );
          })}
        </NavLinkWrapper>
        <Footer>
          <hr />
          <h1>New New</h1>
        </Footer>
      </MenuContainer>
    </Menu>
  );
}

export default NavMenu;