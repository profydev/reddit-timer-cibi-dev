import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import GlobalStyles from './GlobalStyles';

import './normalize.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
