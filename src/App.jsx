import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <HelmetProvider>
        <Router>
          <RecoilRoot>
            <Header />
            <Main />
            <Footer />
          </RecoilRoot>
        </Router>
      </HelmetProvider>
    </Box>
  );
}

export default App;
