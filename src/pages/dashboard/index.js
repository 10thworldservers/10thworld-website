import React, { useState, useEffect } from 'react'
import Layout from '../../components/common/layout/layout';
import { Navigation } from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import styled from 'styled-components';
import { dummyServer } from '../../dummydata/server-info';
import { dummyUser } from '../../dummydata/user-info';
import Footer from "../../components/sections/footer"
import { ScrollProvider } from '../../context/ScrollProvider';
import { HeaderProvider } from '../../context/HeaderProvider.js';

import {
  Container,
} from '../../components/global';

// Dummy Data being used
const DashBoard = () => {
  const [active, setActive] = useState();

  const isSubActive = () => {
    if (dummyUser.subscribed === 'Active') {
      setActive(true)
    } else {
      setActive(false)
    }
  };

  useEffect(() => {
    isSubActive();
  }, [active])

  return (
    <ScrollProvider>
      <HeaderProvider>
        <Layout>
          <SEO title="Dashboard" />
          <Navigation />
          <Container>
            <UserDashBoard>
              <DataSection>
                <DataTitle>User Name</DataTitle>
                <Row>
                  <DataUser>
                    <h4 style={{ margin: '.75rem 0 0.75rem 0rem' }}>{dummyUser.username}</h4>
                  </DataUser>
                </Row>
                <DataTitle>Date</DataTitle>
                <Row>
                  <DataInfo>
                    {dummyServer[0].date}
                  </DataInfo>
                </Row>
                <DataTitle>Subscription</DataTitle>
                <Row>
                  {active ? <SubActive>Active</SubActive> : <SubInactive>Inactive</SubInactive>}
                </Row>
              </DataSection>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5rem' }}>
                <ServerContainer>
                  <SectionTitle>Server Info</SectionTitle>
                  <ServerInfo></ServerInfo>
                </ServerContainer>
                <SubContainer>
                  <SectionTitle>Subscription Info</SectionTitle>
                  <SubInfo></SubInfo>
                </SubContainer>
              </div>
            </UserDashBoard>
          </Container>
          <Footer />
        </Layout>
      </HeaderProvider>
    </ScrollProvider>

  )
}
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
export default DashBoard
