import styled from 'styled-components';

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 15%;
  justify-content: space-around;

  @media (max-width: 575px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 50%;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 45%;
  }
  @media (max-width: 991px) {
    margin-top: 25%;
  }
`

export default FaqContainer;