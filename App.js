import React from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/components/Navigator';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
