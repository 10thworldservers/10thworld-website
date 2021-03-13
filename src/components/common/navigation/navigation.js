import React, { useState, useEffect } from "react"
import Scrollspy from "react-scrollspy"
import logo1 from "../../../images/ShieldNameBlue.png"
import { Menu, X } from "react-feather"
import styled from 'styled-components';
import { Link } from 'gatsby';


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

        <Mobile hide>{getNavList({})}</Mobile>
      </StyledContainer>
      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{getNavList({ mobile: true })}</Container>
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