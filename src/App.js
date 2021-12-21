import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import Maps from './components/maps';
import * as appActions from './redux/actions';
import ApiYoutube from './components/apiYoutube';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <View>
        <Maps
          lat={state.maps.latitude}
          long={state.maps.longitude}
          {...state}
          {...actions}
        />
        <ApiYoutube {...state} {...actions} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions.actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);