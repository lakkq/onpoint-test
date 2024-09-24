import Nav from "./Nav";
import SlidesWrapper from "./SlidesWrapper";
import Slide1 from "./slides/Slide-1";
import Slide2 from "./slides/Slide-2";
import Slide3 from "./slides/Slide-3";
import { ContextProvider } from "./context/Context";

import "./fonts/fonts.css";
import "./styles/reset.css";
import "./styles/global.css";

import Logo from "./imgs/logo.svg";

function App() {
  return (
    <ContextProvider>
      <div className="window">
        <Nav />
          <SlidesWrapper>
            <Slide1 />
            <Slide2 />
            <Slide3 />
          </SlidesWrapper>
        <img src={Logo} alt="onpoint" className="logo" />
      </div>
    </ContextProvider>
  );
}

export default App;
