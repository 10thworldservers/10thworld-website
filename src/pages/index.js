import React, {useState} from "react";

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
import { AuthContext } from '../hooks/use-auth';
//import { AzureAuthButton } from '../azure/azure-auth-button.js';

const IndexPage = () => {

  const [user, setUser] = useState("test");
  const value = {user, setUser};
  return (

    <ScrollProvider>
      <HeaderProvider>
        <Layout>
       
          <AuthContext.Provider value={value}>
              <SEO title="Home" />
              <Navigation />
              <Header />
              {/* <div>
                <AzureAuthButton />
              </div> */}
              <Features />
              <GetStarted />
              <Footer />
          </AuthContext.Provider>     
            
        </Layout>
      </HeaderProvider>
    </ScrollProvider>
  )
};


export default IndexPage;
