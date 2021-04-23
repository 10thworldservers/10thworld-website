import styled from 'styled-components';
import viking1 from '../../images/landscape-darkblue-lower.svg';

export const Header = styled.header`
  width: 100%;
  height: 500px;
  background-image: url(${viking1});
`;

export const ServerContainer = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
`;
export const SubContainer = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
`;
export const SectionTitle = styled.h1`
  color: white;
  display: inline-block;
  padding: 0;
  margin-top: 0;
`;

export const ServerInfo = styled.section`
  width: 750px;
  height: 250px;
  background-color: ${({ theme }) => theme.color.white.dark};
  border-radius: 0 10px 10px 0;
  border-left: 0.25em solid ${({ theme }) => theme.custom.accentThree};
  color: ${({ theme }) => theme.color.primary};
`;

export const SubInfo = styled.section`
  width: 750px;
  height: 250px;
  border-radius:0 10px 10px 0;
  color: ${({theme}) => theme.color.primary};
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.color.white.dark};
  border-left: 0.25em solid ${({ theme }) => theme.custom.accentThree};
`;

export const UserDashBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
`;


export const DataTitle = styled.h4`
  color: ${({theme}) => theme.color.primary};
  display: inline-block;
  margin: 0 0.25rem 0.5rem 0.25rem;
`;

export const DataSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0 10px 0 10px;
  background: ${({ theme }) => theme.color.white.lessdark};
  box-shadow: .10em 1px 5px ${({theme}) => theme.color.white.lessdark};
  padding: 1.33em;
  ${({theme}) => theme.font_size.regular};
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    position: absolute;
    top: 55%;
    left: 15%;
    display: flex;
    width: 75%;
    flex-direction: row;
  };
  
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DataInfo = styled.span`
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  text-align: center;
  font-weight: 600;
  border-radius: 10px;
  padding: 0.25rem;
`;

export const SubActive = styled.span`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  font-weight: 600;
  border: 1px solid green;
  border-radius: 10px;
  padding: 0.25rem;
`;

export const SubInactive = styled.span`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  border: 1px solid red;
  border-radius: 10px;
  padding: 0.25rem;
`;



export const DashBoardFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
`;
export default ServerContainer