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
  Col,
  DataInfo,
  SubActive,
  SubInactive,
  DashBoardFlexContainer,
  Header
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
            <Header /> 
            <Container>
              <UserDashBoard>
                <DataSection>
                  <Col>
                    <DataTitle>Display Name</DataTitle>
                    <DataInfo>
                      {dummyUser.username}
                    </DataInfo>
                  </Col>
                  <Col>
                    <DataTitle>Email</DataTitle>
                    <DataInfo>
                      {dummyUser.email}
                    </DataInfo>
                  </Col>
                  <Col>
                    <DataTitle>Subscription</DataTitle>
                    {active ? <SubActive>Active</SubActive> : <SubInactive>Inactive</SubInactive>}
                  </Col>
                </DataSection>
                <DashBoardFlexContainer>
                  <ServerContainer>
                    <SectionTitle>Server Info</SectionTitle>
                    <ServerInfo></ServerInfo>
                  </ServerContainer>
                  <SubContainer>
                    <SectionTitle>Subscription Info</SectionTitle>
                    <SubInfo></SubInfo>
                  </SubContainer>
                </DashBoardFlexContainer>
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
