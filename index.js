import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import saga from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import SampleApp from './src/App';
import {name as appName} from './app.json';
import * as reducers from './src/redux/reducers';
import sagaRoot from './src/redux/sagas';

const middlewares = [];
const reducer = combineReducers(reducers);
const sagaMiddleware = saga();

middlewares.push(sagaMiddleware);
const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(sagaRoot);

export default class App extends Component {
  render() {
    console.log('test')
    return (
      <Provider store={store}>
        <SampleApp/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => App);