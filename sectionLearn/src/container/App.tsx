import React from 'react';
import "../assets/stylesheet/style.scss";
import { path_constants } from '../constants/path.constant';
import Home from './pages/Home';
import { Header } from '../components/Header/Header';
import { Route, Switch } from 'react-router';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Error } from './pages/Error';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href={path_constants.style} />
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
