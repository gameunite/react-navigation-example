import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.listener = this.props.navigation.addListener('didFocus', () => (
      console.log('ProfileScreen')
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile Screen
        </Text>
      </View>
    );
  }
};

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default connect(null, null)(ProfileScreen);
