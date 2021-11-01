import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Weather from "./pages/Weather";
import About from "./components/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MainHeader />
      <Footer />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/weather" exact>
            <Weather />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
