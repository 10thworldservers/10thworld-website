import React, {useState, useContext} from "react";

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import { Navigation } from "../components/common/navigation/navigation";
import Header from "../components/sections/header";
import Features from "../components/sections/features";
import Footer from "../components/sections/footer";
import GetStarted from "../components/sections/getstarted";
import { ScrollProvider } from '../context/ScrollProvider';
import { HeaderProvider } from '../context/HeaderProvider.js';
import { AuthProvider } from '../context/AuthProvider';

const IndexPage = () => {
  return (

    <ScrollProvider>
      <HeaderProvider>
        <Layout>
           <AuthProvider> 
              <SEO title="Home" />
              <Navigation />
              <Header />
              <Features />
              <GetStarted />
              <Footer />
           </AuthProvider>      
        </Layout>
      </HeaderProvider>
    </ScrollProvider>
  )
};


export default IndexPage;
