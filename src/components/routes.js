import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import ListScreen from '../screens/listScreen';
import ProfileScreen from '../screens/profileScreen';

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
