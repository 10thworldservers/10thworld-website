import styled from 'styled-components';

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 15%;
  justify-content: space-around;

  @media (max-width: ${props => props.theme.screen.xs}) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 50%;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 45%;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-top: 25%;
  }
`

export default FaqContainer;