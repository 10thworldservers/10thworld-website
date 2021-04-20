import styled from 'styled-components';

export const PriceContain = styled.div`
  min-height: 300px;
  width: 100%;
  margin: 1.25rem auto;
  border: 1px solid ${({ theme }) => theme.color.white.regular};
  border-radius: 10px;
`;

export const PriceTitle = styled.h1`
  color: ${({ theme }) => theme.color.white.regular};
  text-align: center;
  margin: 1.5rem 0 0 0;
  font-size: 1.25rem;
`;

export const PriceLine = styled.div`
  width: 75%;
  background-color: ${({ theme }) => theme.color.white.regular};
  height: 5px;
  display: flex;
  justify-content: space-around;
  margin: 4rem auto;
`;

export const PriceBall = styled.div`
  width: 20px;
  border-radius: 50%;
  height: 20px;
  background-color: ${props => props.active ? ({ theme }) => theme.color.white.regular : ({ theme }) => theme.color.primary};
  border: ${props => props.active ? 'none' : '1px solid #FFFFFF'};
  transition: border 0.2s ease;
  margin-top: -7px;
`;

