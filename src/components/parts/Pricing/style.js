import styled from 'styled-components';

export const PriceContain = styled.div`
  min-height: 300px;
  width: 100%;
  margin: 1.25rem auto;
  border-radius: 10px;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const PriceTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  h2 {
  color: ${({ theme }) => theme.color.white.regular};
  text-align: center;
  font-weight: bold;
  margin: 0;
  }
  span {
    color: ${({ theme }) => theme.color.white.regular};
    margin: 0 0 0.75rem 0;
    font-weight: 600;
    font-size: 18px;
  }
  
`;

export const PriceLine = styled.div`
  height: 75vh;
  width: 5px;
  background-color: ${({ theme }) => theme.color.white.regular};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1.5rem auto;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: 75%;
    height: 5px;
    flex-direction: row;
    margin: 2.5rem auto;
  }
  /* width: 75%;
  
  height: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  margin: 1.5rem auto; */
`;

export const PriceBall = styled.div`
  width: 20px;
  border-radius: 50%;
  height: 20px;
  background-color: ${props => props.active ? ({ theme }) => theme.color.primary : ({ theme }) => theme.color.white.regular};
  border: ${props => props.active ? '1px solid #FFFFFF' : 'none'};
  transition: border 0.2s ease;
  margin-left: -7px;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    margin-top: -7px;
  }
`;

export const PriceTextContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    max-width: 75%;
    flex-direction: row;
    margin: -2.5rem 10rem;
  }
`;

export const PriceInfo = styled.div`
  @media (min-width:${({ theme }) => theme.screen.md}) {
    width: 50%;
    &:nth-child(4){
    text-align: center;
  }    
  }

  p {
    color: ${props => props.active ? ({ theme }) => theme.color.white.regular : ({ theme }) => theme.color.white.dark};
    transition: color 0.2s ease-in;
    font-size: 18px;
    margin: 0.5rem;
    padding: .5rem;
    display: block;
    font-weight: 600;
    letter-spacing: .1rem;
  }
`;