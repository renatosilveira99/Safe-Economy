/* eslint-disable prettier/prettier */
// App.js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'ViewPagerAndroid',
  'componentWillReceiveProps', 
  'componentWillMount',
  'Component'
]);

import Root from './Root';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
