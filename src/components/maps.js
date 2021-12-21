import React, { Component } from 'react';
import {
  View,
  Platform,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import ApiYoutube from './apiYoutube';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class Maps extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const checkAndroidPermission = async () => {
      const permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
      const granted = await PermissionsAndroid.request(permission);

      if (granted !== PermissionsAndroid.RESULTS.GRANTED)
          return false;
      return true;
    };

    if (Platform.OS !== 'ios' && !(checkAndroidPermission()))
      return alert('Geolocation permission denied');
    Geolocation.getCurrentPosition(
      (position) => {
          var location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
          };
          this.props.latitude(location.latitude);
          this.props.longitude(location.longitude);

          this.props.apiRequest({max_result: 10, maps: location});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000}
    );
  }

  onMapPress(e) {
    this.props.latitude(e.nativeEvent.coordinate.latitude);
    this.props.longitude(e.nativeEvent.coordinate.longitude);
    var data = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    }

    this.props.apiRequest({max_result: 10, maps: data});
  }

  render() {
    return (
      <View style={styles.view}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={this.props.maps}
          onPress={(e, i) => this.onMapPress(e, i)}>
          <Marker coordinate={this.props.maps} />
        </MapView>
        <ApiYoutube />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  centeredView: {
    marginTop: 150,
  },
  modalView: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    display: 'flex',
  },
  modalTopView: {
    width: '100%',
    borderBottomColor: '#cecece',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    top: -15
  },
  cancelButton: {
      padding: 5,
      borderRadius: 50,
      backgroundColor: '#eef3f5',
  },
  topLeft: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  iconLeft: {
      color: '#d3d3d3',
      paddingLeft: 5,
  },
  cancelText: {
      color: '#575757',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingLeft: 2,
      fontSize: 15
  },
  modalContainer: {
    height: '100%',
  },
  modalContent: {
    backgroundColor:'red',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});