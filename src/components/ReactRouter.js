import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page_1 from './Page_1';
import Page_2 from './Page_2';
import NavbarContext from '../context/navbar/navbarContext';


const ReactRouter = () => {
  const navbarContext = useContext(NavbarContext);
  const { route_1, route_2 } = navbarContext;

  console.log('the reactRouter', route_1)

  return (
    < Router>
      <Switch>
        <Route
          exact
          path={'/' + route_1}
          component={Page_1}
        />
        <Route
          exact
          path={'/' + route_2}
          component={Page_2}
        />
        <Route component={Page_1} />
      </Switch>
    </Router>
  )
};

export default ReactRouter;