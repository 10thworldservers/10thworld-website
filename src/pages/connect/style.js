import styled from 'styled-components';
import { Container } from '../../components/global';

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const InstContainer = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
`
export const InstTitle = styled.h1`
  color: white;
  margin-top: 10vh;
  margin-left: 5%;
  @media (max-width: 575px) {
    text-align: center;
    margin-top: 10vh;
    margin-bottom: 2.25rem;
  }
  @media (max-width: 767px) {
    text-align: center;
    margin-top: 10vh;
  }
  @media (max-width: 991px) {
    margin-top: 10vh;
  }
`
export const InstFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  justify-content: space-around;
  align-items: center;
  &:nth-child(odd) {
    flex-direction: row-reverse;
    img {
    }
  }

  img {
    height: 300px;
    border-radius: 50%;
    object-fit: center;
  }

  @media (max-width: 575px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 1.50rem;
    margin-bottom: 0.50rem;
    &:nth-child(odd) {
      flex-direction: column-reverse;
    }
    img {
      height: 150px;
      border-radius: 10px;
    }
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 0.50rem;
    margin-bottom: 0.50rem;
    &:nth-child(odd) {
      flex-direction: column-reverse;
    }
    img {
      border-radius: 10px;
      /* max-height: 50%; */
      height: 250px;
    }
  }
  @media (max-width: 991px) {
    img {
      max-height: 75%;
    }
  }
`
export const ImageWrapper = styled.div`
max-width: 30%;
  @media (max-width: 575px) {
    max-width: 100%;   
  }
  @media (max-width: 767px) {
     max-width: 75%;
  }
  @media (max-width: 991px) {
     
  }
`
export const InstText = styled.p`
  color: white;
  font-size: 1.25rem;
  display: block;
  margin-left: 1.25rem;
  max-width: 50%;
  line-height: 30px;

  @media (max-width: 575px) {
    max-width: 100%;
    margin: 0;
  }
  @media (max-width: 767px) {
   max-width: 75%;
   margin: 0;
  }
  @media (max-width: 991px) {
   
  }
`
export default InstContainer;