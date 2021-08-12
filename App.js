import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AppHeader from './AppHeader';

// You can import from local files
import Insta from './screens/IGscreen';
import FaceB from './screens/FBscreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return(
     
      
    <Appcontainer/>
    
    )
  }
}

var TabNavigator = createBottomTabNavigator({
  Insta: { screen: Insta },
  FaceB: { screen: FaceB },
});
const Appcontainer = createAppContainer(TabNavigator);
