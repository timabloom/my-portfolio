import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RecoilRoot>
          <Header />
          <Main />
          <Footer />
        </RecoilRoot>
      </Router>
    </HelmetProvider>
  );
}

export default App;
