import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {Typography, View as UILibView} from 'react-native-ui-lib';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import rootReducer from './src/store/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

Typography.loadTypographies({
  h1: {...Typography.text40},
  h2: {...Typography.text50},
  h3: {...Typography.text70M},
  body: Typography.text70,
  bodySmall: Typography.text80,
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UILibView flex>
        <AppNavigator />
      </UILibView>
    </Provider>
  );
};

export default App;
