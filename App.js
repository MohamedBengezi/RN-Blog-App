import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator);
export default () => {
  return <Provider>
    <App />
  </Provider>
};
