import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Storeguilhain from "./components/Storeguilhain";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          {/* <Intro />
          <hr />
          <Setup />
          <hr /> */}
          <Demo />
          <Storeguilhain />
          {/* <hr />
          <Footer /> */}
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
