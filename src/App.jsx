import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Main from './products/components/main/Main.jsx';
import Details from './products/components/details/Details.jsx';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/:id' component={Details} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
