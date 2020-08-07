import 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Startscreen from './src/components/startScreen';
import WaitingScreen from './src/components/waitingScreen';


const Stack = createStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Start" component={Startscreen} />
          <Stack.Screen name = "Waiting" component = {WaitingScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    
  );
};
export default App;
