import styled from "styled-components"
import { Container } from "../../global"
import { Menu, X } from 'react-feather';

export const Nav = styled.nav`
  padding: ${props => props.isVisible ? `16px 0` : `24px 0`};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  margin-left: auto;
  margin-right: auto;
  background: ${props => props.theme.color.secondary};
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.5s ease-out;
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

export const NavListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${props => props.theme.screen.sm}) {
      flex-direction: column;
      position: fixed;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding-top: 5vh;
      padding-bottom: 5vh;
      background-color: ${props => props.theme.color.primary};
      transition: all 0.3s ease-in;
      top: 15vh;
      left: ${props => (props.open ? "-100%" : "0")};
    }
`
export const ImgContainer = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin-left: 5%;
  cursor: pointer;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    a {
      color: ${props => props.theme.color.black.regular};
      text-decoration: none;
    }
  }
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 85%;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const LogoutBtnContainer = styled.div`
  margin-right: 10%;
   button {
    font-size: 18px;
    padding: .85rem 1.5rem;
    font-weight: 600;
    text-align: center;
    color: ${props => props.theme.color.white.regular};
    background-color: hsl(42, 87%, 55%);
    border-radius: 10px;
    letter-spacing: 1.5px;
    box-shadow: none !important;
    background-color: ${props => props.theme.color.primary};
    &:hover {
      background-color: ${props => props.theme.color.black.lightest} !important;
      
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin: 0;

    button {
      font-size: 24px;
    }
  }
`

export const Hamburger = styled(Menu)`
  color: ${props => props.theme.color.primary};
  :hover {
    cursor: pointer;
  }
`

export const Cancel = styled(X)`
  color: ${props => props.theme.color.primary};
  :hover {
    cursor: pointer;
  }
`;


export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: flex;
  }
`
export default Nav;

// Background blur info
// background-color: ${props => props.scrolled && `rgba(245, 245, 250, .8`};
// box-shadow:  ${props =>
//   props.scrolled &&
//   `0 0 0 1px rgba(0,0,50,.02) inset, 0 1px 1px rgba(0,0,50,.05) inset, 0 2px 4px rgba(0,0,50,.04) inset`};
//   backdrop-filter: ${props => props.scrolled && `blur(15px)`};
