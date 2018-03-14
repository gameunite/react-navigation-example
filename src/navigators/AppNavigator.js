import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import { addListener } from '../utils/redux';

export const MainNavigator = TabNavigator({
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
  },);

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainNavigator },
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, navigation } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: navigation,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(AppWithNavigationState);
