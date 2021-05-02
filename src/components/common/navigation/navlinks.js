import React, {useContext} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import AzureAuthButton from '../../../azure/azure-auth-button';

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
const SignUpContainer = styled.div`
  max-width: 25%;

  button {
    box-shadow: none;
    background: transparent;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${props => props.theme.color.primary};
    cursor: pointer;

    &:hover {
      background: transparent;
      color: ${props => props.theme.color.black.lightest};
    }
  }
`
const NavLinks = ({ userAccount }) => {
  return (
    <>
      <NavItem to="/connect">Connect</NavItem>
      <NavItem to="/faq">Faq</NavItem>
      <SignUpContainer>
      {userAccount === undefined ? <AzureAuthButton text="SignUp" userAction="loginRedirect" /> : null }
      </SignUpContainer>
      {userAccount !== undefined ? <NavItem to="/dashboard">Dashboard</NavItem> : null}
    </>
  )
}

export default NavLinks
