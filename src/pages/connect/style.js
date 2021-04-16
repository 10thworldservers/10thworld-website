import styled from 'styled-components';
import { Container } from '../../components/global';
// refactor this for mobile first

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
`;

export const ConnectContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
`;

export const ConnectTitle = styled.h1`
  color: white;
  text-align: center;
  @media (min-width: 575px) {
    text-align: center;
    margin-top: 10vh;
    margin-bottom: 2.25rem;
  }
 
`;

export const ConnectFlexWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 1.75rem;
  margin-bottom: 5vh;
  justify-content: space-around;
  align-items: center;

  
   .connect__static--image {
    height: 150px;
    border-radius: 10px;
    object-fit: center;
    margin-bottom: 1.5rem;
    @media (min-width: 575px) {
      height: 250px;
    }
    @media (min-width: 767px) {
      height: 300px;
      width: 300px;
      border-radius: 50%;
    }
  }
  @media (min-width: 767px) {
    flex-direction: row;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;

export const ImageWrapper = styled.div`
  max-width: 100%;
`;


export const ConnectText = styled.p`
  color: white;
  font-size: 1rem;
  display: block;
  margin-left: 1.25rem;
  max-width: 100%;
  line-height: 30px;
  @media(min-width: 575px) {
    font-size: 1.25rem;
  }
  @media (min-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const EmailUs = styled.p`
  text-decoration: underline;
  color: ${props => props.theme.color.white.regular};
  font-size: 1rem;
  margin-left: 2%;
  @media(min-width: 575px) {
    font-size: 1.25rem;
  }
  @media (min-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const EmailTitle = styled.h3`
  color: ${props => props.theme.color.white.regular};
  font-size: 1rem;
  @media(min-width: 575px) {
    font-size: 1.25rem;
  }
  @media (min-width: 767px) {
    font-size: 1.5rem;
  }
`;
export default ConnectContainer;