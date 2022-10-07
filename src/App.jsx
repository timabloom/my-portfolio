import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Flex, Box } from "@chakra-ui/react";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RecoilRoot>
          <Flex direction="column" minH="100vh" alignItems="stretch">
            <Flex justifyContent="center">
              <Header />
            </Flex>
            <Flex flexDirection="column" align="center">
              <Main />
            </Flex>
            <Box flex={1}></Box>
            <Footer />
          </Flex>
        </RecoilRoot>
      </Router>
    </HelmetProvider>
  );
}

export default App;
