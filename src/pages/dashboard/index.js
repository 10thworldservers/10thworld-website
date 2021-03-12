import React from 'react'
import Layout from '../../components/common/layout/layout';
import Navigation from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import { dummyServer } from '../../dummydata/server-info';

// Dummy Data being used
const DashBoard = () => {
  return (
    <Layout>
      <SEO title="Dashboard" />
      <Navigation />
      {dummyServer.map((item) => {
        return (
          <div key={item.date}>
            {item.date}
          </div>
        )
      })}
    </Layout>
  )
}

export default DashBoard
