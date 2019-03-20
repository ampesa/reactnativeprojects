import React from 'react'; 
import { createStackNavigator, 
  createAppContainer 
} from 'react-navigation'; 

import AppNavigator from './AppNavigator';

import TestScreen from './../screens/TestScreen'; 
import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';

  
const RootStack = createStackNavigator( 
  { 
    Test: TestScreen, 
    Login: LoginScreen, 
    Signup: SignupScreen,
    ForgotPassword: ForgotPasswordScreen,
  }, 
  { 
    initialRouteName: 'Test', 
  } 
); 
  
const AppContainer = createAppContainer(RootStack); 
  
export default class MainNavigator extends React.Component { 
  render() { 
    return (
      <AppContainer />
    ); 
  } 
}


/*
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import TestScreen from '../screens/TestScreen';

const HomeStack = createStackNavigator({
  Test: TestScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Test',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
});
*/