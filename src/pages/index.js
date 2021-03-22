import React, {useState, useContext} from "react";

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
import { AuthProvider } from '../hooks/use-auth';
import { AuthContext } from "../hooks/use-auth.js";

const IndexPage = () => {
  //const {context} = useContext(AuthContext);
  //console.log("context: ", context)
  //const [user, setUser] = useState("test");
  //const value = {user, setUser};

  // const context = new AzureAuthContext();
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
