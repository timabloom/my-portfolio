import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RecoilRoot>
          <Flex justifyContent="center" >
            <Header />
          </Flex>
          <Flex flexDirection="column" align="center">
            <Main />
          </Flex>
          <Footer />
        </RecoilRoot>
      </Router>
    </HelmetProvider>
  );
}

export default App;
