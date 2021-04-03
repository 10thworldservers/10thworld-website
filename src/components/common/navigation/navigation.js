import React, { useState, useContext } from "react"
import Scrollspy from "react-scrollspy"
import logo1 from "../../../images/ShieldNameBlue.png"
import { Menu, X } from "react-feather"
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useHeaderContext } from '../../../context/HeaderProvider';
import Checkout from '../../sections/checkout';
import { AuthContext } from '../../../context/AuthProvider';
import { Container } from "../../global"
import AzureAuthButton from '../../../azure/azure-auth-button';
import {
  Nav,
  NavItem,
  Brand,
  NavListWrapper,
  MobileMenu,
  Mobile,
  LogoutBtnContainer,
  BtnContainer
} from "./style"

const NAV_ITEMS = ["FAQ", "Connect", "Dashboard"]

export const Navigation = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isVisible } = useHeaderContext();
  const { context } = useContext(AuthContext);

  const userAccount = context.getAccount();

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
      <Link to={`${item.toLowerCase()}`} href={`/${item.toLowerCase()}`} onClick={() => closeMobileMenu()}>
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

  return (
    <Nav {...scrolled} isVisible={isVisible}>
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
      </Mobile>
      <BtnContainer>
        {userAccount !== undefined ? (
          <LogoutBtnContainer>
            <AzureAuthButton text="Logout" userAction={undefined} />
          </LogoutBtnContainer>
        )
          : null}
        {userAccount !== undefined ? <Checkout /> : null}

      </BtnContainer>

      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{
              getNavList({ mobile: true })}
              {userAccount !== undefined ? (

                <AzureAuthButton text="logout" userAction={undefined} />
              )
                : null}
              {userAccount !== undefined ? <Checkout /> : null}
            </Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  )
}



const ImgContainer = styled.div`
  padding: 0.75rem;
  margin-left: 0.5rem;
`