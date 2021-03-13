import React, { useState, useEffect } from "react"
import Scrollspy from "react-scrollspy"
import logo1 from "../../../images/ShieldNameBlue.png"
import { Menu, X } from "react-feather"
import styled from 'styled-components';
import { Link } from 'gatsby';

import Checkout from '../../sections/checkout';

import { Container } from "../../global"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from "./style"

const NAV_ITEMS = ["Features", "Connect", "Dashboard"]

export const Navigation = ({scrolled}) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen({ mobileMenuOpen: false })
    }
  }

  const getNavAnchorLink = item => {
    return (
      <Link to={`${item.toLowerCase()}`} style={{ color: `${hasScrolled ? 'black' : 'white'}` }} href={`/${item.toLowerCase()}`} onClick={() => closeMobileMenu()}>
        {item}
      </Link>
    )
  }

  const getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      console.log(window.pageYOffset);
      if (scrollTop > 10) {
        setHasScrolled({ hasScrolled: true })
      } else {
        setHasScrolled({ hasScrolled: false })
      }
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled])

  console.log(hasScrolled);
  
  return (
    <Nav {...scrolled} scrolled={hasScrolled}>
      <StyledContainer>
        <Brand>
          <Scrollspy offset={-64} item={["top"]} currentClassName="active">
            <Link to="/">
              <ImgContainer>
                <img src={logo1} alt="10th World Servers main logo" />
              </ImgContainer>
            </Link>
          </Scrollspy>
        </Brand>
        <Mobile>
          <button
            style={{ color: "black", background: "none" }}
          >
            {mobileMenuOpen ? (
              <X size={24} alt="close menu" />
            ) : (
              <Menu size={24} alt="open menu" />
            )}
          </button>
        </Mobile>

        <Mobile hide>
          {getNavList({})}
          <Checkout/>
        </Mobile>
      </StyledContainer>
      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{
              getNavList({ mobile: true })}
              <Checkout/>
            </Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>


  )
}



const ImgContainer = styled.div`
  box-shadow: .25px .25px 5px black;
  border-radius: 10px;
  padding: 0.75rem;
  background-color: ${props => props.theme.color.white.regular};
  
`

const LogOutButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.signUp ? `white` : `black`};
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-top: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: #ffffff;
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
  `