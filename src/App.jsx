import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Flex, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RecoilRoot>
          <Flex direction="column" minH="100vh" alignItems="stretch">
            <Header />
            <Box flex={1}>
              <Main />
            </Box>
            <Footer />
          </Flex>
        </RecoilRoot>
      </Router>
    </HelmetProvider>
  );
}

export default App;
