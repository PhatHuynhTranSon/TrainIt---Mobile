import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../pages/home';
import LoginPage from '../../pages/authentication/login';
import SignUpPage from '../../pages/authentication/signup';
import Hub from '../../pages/hub';
import SplashScreen from '../../pages/splash';
import { isLoggedIn } from '../../authentication';
import ProjectDetailScreen from '../../pages/project';

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loggedInLoaded, setLoggedInLoaded] = React.useState(false);

  React.useEffect(() => {
    isLoggedIn()
      .then(value => {
        if (value) {
          setLoggedIn(true);
          setLoggedInLoaded(true);
        } else {
          setLoggedIn(false);
          setLoggedInLoaded(true);
        }
      })  
      .catch(error => {
        //TODO: Error handling
      })
  }, []);

  return (
    <Navigator headerMode='none'>
      {
        loggedInLoaded ?
        <>
        {
          loggedIn ? 
          <>
            <Screen name="Hub" component={Hub}/>
            <Screen name="ProjectDetail" component={ProjectDetailScreen}/>
            <Screen name='Login' component={LoginPage}/>
          </> : 
          <>
            <Screen name='Home' component={HomeScreen}/>
            <Screen name='Login' component={LoginPage}/>
            <Screen name='Signup' component={SignUpPage}/>
          </>
        }
        </> :
        <Screen name="Splash" component={SplashScreen}/>
      }
    </Navigator>
  )
};

export const AppNavigator = () => (
  <NavigationContainer>
    <MainNavigator/>
  </NavigationContainer>
);