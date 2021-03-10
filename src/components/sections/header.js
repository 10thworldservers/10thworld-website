import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import SkyBackGround from "../../images/landscape-darkblue-upper.png"

import { Container } from "../global"

// Azure Authentication Button
import AzureAuthenticationButton from '../../azure/azure-authentication.component';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "cloudserver1_cut" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>Valheim Servers</Subtitle>
            <h2>
              Sign up to gain access to your own Valheim server and play with up to 10 of your friends.
            </h2>
            <SignUpButton>
            <AzureAuthenticationButton text="Sign Up"></AzureAuthenticationButton>              
            </SignUpButton>
              
            <FormSubtitle>
              Already have an account?{" "}
              <FormSubtitleLink>
                <AzureAuthenticationButton text="Sign In"/>
              </FormSubtitleLink>
            </FormSubtitle>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  margin-top: 20rem;
  margin-bottom: 5rem;
  padding: 10rem;
  background-image: url(${SkyBackGround})
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 2.5rem;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const FormSubtitle = styled.span`
  margin-top: 1.75rem;
  ${props => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const SignUpButton = styled.button`
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
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
