import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboding_1 from './src/screens/Onboding_1';
import Onboding_2 from './src/screens/Onboding_2';
import Onboding_3 from './src/screens/Onboding_3';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Onboding_1" component={Onboding_1} />
          <Tab.Screen name="Onboding_2" component={Onboding_2} />
          <Tab.Screen name="Onboding_3" component={Onboding_3} />
        </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;