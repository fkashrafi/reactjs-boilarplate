import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './redux-saga/store/store';

import Routes from './routes/routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          {Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => {
                if (!route.private) {
                  return (<div>
                    {/* <p>Public Route</p> */}
                    {route.component(props)}
                  </div>)
                } else if (route.private) {
                  return (<div>
                    {/* <p>Private Route</p> */}
                    {route.component(props)}
                  </div>)
                } else {
                  return <Redirect to="/" />
                }
              }}
            />))
          }
        </div>
      </Router>
    </Provider>
  );
}

export default App;
