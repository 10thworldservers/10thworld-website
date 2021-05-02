import React from "react";
import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import { Navigation } from "../components/common/navigation/navigation";
import Header from "../components/sections/header";
import Features from "../components/sections/features";
import Pricing from '../components/parts/Pricing/Pricing';
import Footer from "../components/sections/footer";
import Separator from '../components/parts/Separator/Separator';
import GetStarted from "../components/sections/getstarted";
import { ScrollProvider } from '../context/ScrollProvider';
import { HeaderProvider } from '../context/HeaderProvider.js';
import { AuthProvider } from '../context/AuthProvider';
import getUserById from '../endpoints/user';

const IndexPage = () => {
  return (
    <ScrollProvider>
      <HeaderProvider>
        <Layout>
            <SEO title="Home" />
            <Navigation />
            <Header />
            <Features />
            <Separator />
            <Pricing />
            <GetStarted />
            <Footer />
        </Layout>
      </HeaderProvider>
    </ScrollProvider>
  )
};


export default IndexPage;
