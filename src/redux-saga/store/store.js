import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware];

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
export { store, history };