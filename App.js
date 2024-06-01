import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding_1 from './src/screens/Onboarding_1';
import Onboarding_2 from './src/screens/Onboarding_2';
import Onboarding_3 from './src/screens/Onboarding_3';
import SignUpScreen from './src/screens/SignUpScreen'; // 로그인 -> 회원가입 경로 수정
import LoginScreen from './src/screens/LoginScreen';
import VerificationScreen from './src/screens/VerificationScreen';
const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Onboarding_1" component={Onboarding_1} />
        <Tab.Screen name="Onboarding_2" component={Onboarding_2} />
        <Tab.Screen name="Onboarding_3" component={Onboarding_3} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
