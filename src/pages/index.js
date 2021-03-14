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
  // const [user, setUser] = useState(null);

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
    <ScrollProvider>
      <HeaderProvider>
        <Layout>
          <authContext.Consumer>
            {context => {
              console.log(context)
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
