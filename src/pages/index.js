import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import AzureAuthenticationContext from '../azure/azure-authentication-context';

//import Welcome from "../components/sections/welcome"
import Checkout from "../components/sections/checkout"

import Welcome from "../components/sections/header"
import Purchase from "../components/sections/header"



const IndexPage = () => { 
  let azureAuthContext = new AzureAuthenticationContext();

  const { account } = azureAuthContext;
 
  console.log('The auth context account', account);
  
  return (
    <Layout>
    <SEO title="Home" />
    <Navigation />

      <Header />
      { account !== null ?  <Welcome /> : <Features />}
      <GetStarted />


      { account !== null ?  <Welcome /> : <Header />}
      { account !== null ?  <Checkout /> : <Features />}
      { account !== null ?  <Features /> : <GetStarted />}

    <Footer />
   </Layout>
  
  )
}


export default IndexPage
