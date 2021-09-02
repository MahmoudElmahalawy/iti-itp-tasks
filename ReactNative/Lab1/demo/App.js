import React from 'react';
import type {Node} from 'react';
import ScreensNavigator from './src/navigation';

import Login from './src/screens/Login';
const App: () => Node = () => {
  return <ScreensNavigator />;
};

export default App;
