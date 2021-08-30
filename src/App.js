import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page_1 from './components/Page_1'
import Page_2 from './components/Page_2'
import { Fragment } from 'react';

import NavbarState from './context/navbar/navbarState'

function App() {
  return (
    <NavbarState>
      <Router>
        <Fragment>
          <Switch>
            <Route
              exact
              path='/page_1'
              component={Page_1}
            />
            <Route
              exact
              path='/page_2'
              component={Page_2}
            />
            <Route component={Page_1} />
          </Switch>
        </Fragment>
      </Router>
    </NavbarState>
  );
}

export default App;
