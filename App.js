import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Provider } from "react-redux";

import store from "./store";
import AuthScreen from "./screens/AuthScrenn";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingScreen from "./screens/SettingScreen";
import ReviewScreen from "./screens/ReviewScreen";

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: createBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: createStackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingScreen }
        })
      }
    })
  }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
