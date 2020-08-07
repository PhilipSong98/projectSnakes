import 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Startscreen from './src/components/startScreen';





const App = () => {
  return (
      <NavigationContainer>
        <Startscreen />
      </NavigationContainer>

    
  );
};

export default App;
