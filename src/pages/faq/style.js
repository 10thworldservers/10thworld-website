import styled from 'styled-components';

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 10%;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 575px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export default FaqContainer;