/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var Button = require('apsl-react-native-button');

var button = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Button
          borderColor={'red'}
          backgroundColor={'green'}
          textColor={'white'}
          onPress={() => {
            console.log('world!')
          }}>
          Hello
        </Button>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('button', () => button);