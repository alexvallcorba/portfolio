import "./App.css";
import { Switch, Route } from "react-router-dom";
import Portfolio from "./screens/portfolio/Portfolio";
import Design from "./screens/design/Design";

import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Home from "./screens/home/Home";
import Layout from './components/layout/Layout'


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/design">
            <Design />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          
        </Switch>
        </Layout>
    </div>
  );
}

export default App;
