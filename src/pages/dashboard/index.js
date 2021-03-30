import React, { useState, useEffect } from 'react'
import Layout from '../../components/common/layout/layout';
import { Navigation } from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import { dummyServer } from '../../dummydata/server-info';
import { dummyUser } from '../../dummydata/user-info';
import Footer from "../../components/sections/footer"
import { ScrollProvider } from '../../context/ScrollProvider';
import { HeaderProvider } from '../../context/HeaderProvider.js';
import { AuthProvider } from '../../context/AuthProvider';
import {
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
} from './style';

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
          <AuthProvider>
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
          </AuthProvider>
        </Layout>
      </HeaderProvider>
    </ScrollProvider>

  )
}

export default DashBoard
