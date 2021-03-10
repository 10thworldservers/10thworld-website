import React ,{ useState } from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import AzureAuthenticationContext from '../azure/azure-authentication-context';
import Welcome from "../components/sections/welcome"

const IndexPage = () => { 
  const azureAuthContext = new AzureAuthenticationContext();

  // const [showWelcome, setShowWelcome] = useState({
  //   showWelcome: azureAuthContext.account
  // });

  // console.log(showWelcome);

  // const showWelcomeButton = () => {
  
     
  //     {azureAuthContext.account === null ? (<Welcome />) : null}
    
  // }

  return (
    <Layout>
    <SEO title="Home" />
    <Navigation />
      <Header />
      {azureAuthContext.account === null ? <Features /> : <Welcome />}
    <GetStarted />
    <Footer />
   </Layout>
  
  )
}


export default IndexPage
