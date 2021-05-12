import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import CardapioQr from './pages/Cardapio';
import Cardapio from './pages/CardapioQr';
import { ParallaxProvider } from 'react-scroll-parallax';



function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cardapio' component={Cardapio} />
          <Route exact path='/8bjLq5IhiYA&ab' component={CardapioQr} />
        </Switch>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
