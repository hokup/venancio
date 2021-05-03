import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import { ParallaxProvider } from 'react-scroll-parallax';



function App() {
  return (
    <Router>
      <Switch>
        <ParallaxProvider>
          <Route exact path='/' component={Home} />
          <Route exact path='/cardapio' component={Cardapio} />
        </ParallaxProvider>
      </Switch>
    </Router>
  );
}

export default App;
