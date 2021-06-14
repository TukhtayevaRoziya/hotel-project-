import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter } from "react-router-dom";
import KanalContainer from "./Container/Kanallar/KanalContainer";
import GalareyaContainer from "./Container/Galareya/GalareyaContainer";
import Home from "./Container/Home/Home";
import HeaderContainer from "./Container/Header/HeaderContainer";
import Servis from "./Container/Servis/Servis";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Route exact path='/' render={() => <Home />} />
        <Route path='/galareya' render={() => <GalareyaContainer />} />
        <Route path='/cervis' render={() => <Servis />} />
        <KanalContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;