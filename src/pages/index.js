import React from "react";

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import { Navigation } from "../components/common/navigation/navigation";
import Header from "../components/sections/header";
import Features from "../components/sections/features";
import Footer from "../components/sections/footer";
import GetStarted from "../components/sections/getstarted";
import Welcome from "../components/sections/welcome";
import { ScrollProvider } from '../context/ScrollProvider';
import { HeaderProvider } from '../context/HeaderProvider.js';
import { authContext } from '../hooks/use-auth';

const IndexPage = () => {
  return (
    <ScrollProvider>
      <HeaderProvider>
        <Layout>
          <authContext.Consumer>
            {context => {
              console.log(context)
              console.log(context.user)
              if (context.user === null) {
                context = {
                  user: true
                }
              }
              return (
                <>
                  <SEO title="Home" />
                  <Navigation />
                  {context.user !== null ? <Welcome /> : <Header />}
                  <Features />
                  <GetStarted />
                  <Footer />
                </>
              )
            }}
          </authContext.Consumer>
        </Layout>
      </HeaderProvider>
    </ScrollProvider>
  )
};


export default IndexPage;
