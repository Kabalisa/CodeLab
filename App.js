import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/loginScreen';
import ListScreen from './src/screens/listScreen';
import ProfileScreen from './src/screens/profileScreen';

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { title: 'WELCOME' }
    },
    Login: { screen: LoginScreen, navigationOptions: { title: 'LOGIN' } },
    List: {
      screen: ListScreen,
      navigationOptions: { title: 'HOME', headerLeft: null }
    },
    Profile: { screen: ProfileScreen, navigationOptions: { title: 'PROFILE' } }
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(navigator);
