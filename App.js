import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import AuthScreen from "./screens/AuthScrenn";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingScreen from "./screens/SettingScreen";
import ReviewScreen from "./screens/ReviewScreen";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(MainNavigator);
