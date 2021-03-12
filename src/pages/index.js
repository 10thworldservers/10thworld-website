import React, { useState } from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Welcome from "../components/sections/welcome"
import AzureAuthContext from '../azure/azure-authentication-context';
// import { authContext } from '../hooks/use-auth';

const IndexPage = () => {
  const [user, setUser] = useState(null);
  const authMethods = new AzureAuthContext();


  console.log(authMethods);

  console.log(setUser);
  // const isTheUserThere = () => {
  //   if (authMethods.getAccount() === undefined) {
  //     console.log('authMethods === undefined', authMethods);
  //     setUser(authMethods.getAccount());
  //   } else {
  //     console.log('authMethods !== undefined', authMethods);
  //     setUser(null)
  //   }
  // };

  // useEffect(() => {
  //   isTheUserThere()
  //   console.log('Is the user there?', user);
  // }, [user, isTheUserThere]);

  return (
    <Layout>
        <SEO title="Home" />
        <Navigation />
        {user !== null ? <Welcome /> : <Header />}

        <Features />
        <GetStarted />
        <Footer />
    </Layout>
  
  )
}


export default IndexPage
