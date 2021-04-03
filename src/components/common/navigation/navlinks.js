import React, {useContext} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { AuthContext } from '../../../context/AuthProvider';

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.primary};
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-weight: 600;
  font-size: 1.25rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: ${props => props.theme.color.secondary};
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: ${props => props.theme.color.black.lightest};
    ::after {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    color: ${props => props.theme.color.white.regular};
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavLinks = () => {
  const { context } = useContext(AuthContext);

  const userAccount = context.getAccount();
  return (
    <>
      <NavItem to="/faq">Faq</NavItem>
      <NavItem to="/connect">Connect</NavItem>
      {userAccount !== undefined ? <NavItem to="/dashboard">Dashboard</NavItem> : null}
    </>
  )
}

export default NavLinks
