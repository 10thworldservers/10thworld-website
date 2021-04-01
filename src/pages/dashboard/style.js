import styled from 'styled-components';

 const ServerContainer = styled.div`
  margin-top: 12rem;
  margin-left: 2rem;
`
 const SubContainer = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
`
 const SectionTitle = styled.h1`
  color: white;
  display: inline-block;
  padding: 0;
  margin-top: 0;
`
 const UserDashBoard = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
`
 const ServerInfo = styled.section`
  width: 750px;
  height: 500px;
  background-color: hsl(0, 0%, 23%);
  border: 1px solid hsl(0, 0%, 23%);
  border-radius: 10px;
  box-shadow: 1px 1px 5px hsl(0, 0%, 23%);
  color: white;
`
 const SubInfo = styled.section`
  width: 750px;
  height: 250px;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  margin-bottom: 2rem;
  background-color: hsl(0, 0%, 23%);
  border: 1px solid hsl(0, 0%, 23%);
  box-shadow: 1px 1px 5px hsl(0, 0%, 23%);
`

 const DataTitle = styled.h4`
  color: white;
  display: inline-block;
  margin: 0.65rem 0 0 0;
`

 const DataSection = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  border-right: 5px solid #B1B1B1;
  border-radius: 10px;
  width: 15%;
  height: 100%;
`
 const Row = styled.div`
  display: flex;
  flex-direction: row;
`
 const DataInfo = styled.article`
  margin-top: 0.65rem;
  color: white;
  border: 1px solid white;
  padding: 0.75rem;
  border-radius: 10px;
`
 const SubActive = styled.article`
  margin-top: .5rem;
  color: white;
  border: 1px solid green;
  padding: 0.75rem;
  border-radius: 10px;
`
 const SubInactive = styled.article`
  margin-top: .5rem;
  color: white;
  border: 1px solid red;
  padding: 0.75rem;
  border-radius: 10px;
`

 const DataUser = styled.article`
  color: white;
`

export {
  ServerContainer,
  SubContainer,
  SectionTitle,
  UserDashBoard,
  ServerInfo,
  SubInfo,
  DataTitle,
  DataSection,
  Row,
  DataInfo,
  SubActive,
  SubInactive,
  DataUser
};