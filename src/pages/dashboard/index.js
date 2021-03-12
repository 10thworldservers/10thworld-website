import React, { useState } from 'react'
import Layout from '../../components/common/layout/layout';
import Navigation from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import styled from 'styled-components';
import { dummyServer } from '../../dummydata/server-info';
import { dummyUser } from '../../dummydata/user-info';


import {
  Container,
  Section
} from '../../components/global';

// Dummy Data being used
const DashBoard = () => {
  return (
    <Layout>
      <SEO title="Dashboard" />
      <Navigation />
      <Container>
        <UserDashBoard>
          <DataSection>
            <DataTitle>User Name</DataTitle>
            <Row>
              <DataUser>
                <h4>{dummyUser.username}</h4>
              </DataUser>
            </Row>
            <DataTitle>Date</DataTitle>
            <Row>
              <DataDate>
                {dummyServer[0].date}
              </DataDate>
            </Row>
          </DataSection>
          <ServerContainer>
            <SectionTitle>Server Info</SectionTitle>
            <ServerInfo>

            </ServerInfo>
          </ServerContainer>
        </UserDashBoard>
      </Container>
    </Layout>
  )
}
const ServerContainer = styled.div`
  margin-top: 12rem;
  margin-left: 2rem;
`
const SectionTitle = styled.h1`
  color: white;
  display: inline-block;
  margin: 0;
  padding: 0;
`
const UserDashBoard = styled.div`
  display: flex;
  flex-direction: row;
`
const ServerInfo = styled.section`
  width: 750px;
  height: 500px;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
`

const DataTitle = styled.h4`
  color: white;
  display: inline-block;
  margin: 0;
`

const DataSection = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  border-right: 5px solid red;
  border-radius: 10px;
  width: 15%;
  height: 1200px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const DataDate = styled.article`
  margin-top: .5rem;
  color: white;
  border: 1px solid white;
  padding: 0.75rem;
`

const DataUser = styled.article`
  color: white;
`
export default DashBoard
