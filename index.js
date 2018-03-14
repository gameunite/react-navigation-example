import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { middleware } from './src/utils/redux';

const store = createStore(
  AppReducer,
  applyMiddleware(thunk),
  applyMiddleware(middleware),
);

function ReduxExampleApp() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}

AppRegistry.registerComponent('ReactNavigationExample', () => ReduxExampleApp);