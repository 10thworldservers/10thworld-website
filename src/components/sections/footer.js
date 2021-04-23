import React from "react"
import styled from "styled-components"
import { Container } from "../global"
import vikingLogo2 from '../../images/ShieldOnlyBlue.png';


const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
    <BrandContainer>
        <LogoImg src={vikingLogo2} alt="10th world shield logo mini"/>
    </BrandContainer>
      <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Self-Hosting</li>
          <li>Community</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <li>Blog</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>The Service</span>
        <ul>
          <li>About Us</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Social</span>
        <ul>
          <li>Forums</li>
          <li>Reddit</li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.black.light};
  position: relative;
  width: 100%;
  bottom: 0;
  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    width: 1000px;
  }
  @media (min-width: ${({ theme }) => theme.screen.xxs}) {
    width: 1000px;
  }
  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    width: 2000px;
  }
`

const BrandContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
  max-width: 30%;
  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const LogoImg = styled.img`
  
`

const FooterColumnContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${props => props.theme.screen.sm}) {
    flex-direction: row;
  }
`
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    ${({theme}) => theme.font_size.xlarge};
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.white.regular};
    @media (min-width: ${({ theme }) => theme.screen.md}) {
        ${({theme}) => theme.font_size.regular};
    }
  }
  ul {
    list-style: none;
    padding: 0;
    color: ${props => props.theme.color.white.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      ${({ theme }) => theme.font_size.xlarge};
      
      @media (min-width: ${({ theme }) => theme.screen.md}) {
        ${({theme}) => theme.font_size.regular};
      }
    }
  }
`

export default Footer
