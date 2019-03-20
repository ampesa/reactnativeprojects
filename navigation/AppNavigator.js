import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';


const MainStack = createSwitchNavigator({ 
  Login: LoginScreen,
  Signup: SignupScreen,
  ForgotPassword: ForgotPasswordScreen,
  Main: MainTabNavigator, 
}); 

const AppContainer = createAppContainer(MainStack); 

export default class AppNavigator extends React.Component { 

  render() { 
    return (
      <AppContainer />
    ); 
  } 
}

/*
export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginScreen,
  Signup: SignupScreen,
  ForgotPassword: ForgotPasswordScreen, 
  Main: MainTabNavigator,
}));

const IntroStack = createStackNavigator({ 
  Login: LoginScreen,
  Signup: SignupScreen,
  ForgotPassword: ForgotPasswordScreen,
}); 

const MainStack = createSwitchNavigator({ 
  Main: MainTabNavigator, 
}); 

const AppContainer = createAppContainer(MainStack); 

export default class AppNavigator extends React.Component { 
  render() { 
    return (
      <AppContainer />
    ); 
  } 
}
*/


/*
import React from 'react';
//import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';

const AppNavigator = createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginScreen,
  Signup: SignupScreen,
  ForgotPassword: ForgotPasswordScreen,
  Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Login',
  });

const AppContainer = createAppContainer(AppNavigator);

export default class AppNavigator extends React.Component { 


  render() { 
    return (
      <AppContainer />
      ); 
  } 
}
*/