import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';

export default class ApiYoutube extends Component {
  constructor(props) {
    super(props);
  }

  cancelModal() {
    this.props.modalVisible(false);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Modal
          propagateSwipe
          style={{ margin: 0 }}
          isVisible={this.props.apiYoutube?.modalVisible}
          swipeDirection='down'
          onSwipeComplete={() => this.props?.modalVisible(false)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ top: -10, alignItems: 'center' }}>
                    <IconF
                      style={{ color: '#d3d3d3' }}
                      size={40}
                      name='minus' />
                </View>
                <View style={styles.modalTopView}>
                  <View style={styles.topLeft}>
                      <Text style={styles.cancelText}>
                        Youtube Video
                      </Text>
                  </View>
                  <View style={{ paddingRight: 10, paddingBottom: 5 }}>
                      <TouchableOpacity
                          onPress={() => this.cancelModal()}
                          style={styles.cancelButton}>
                          <IconM
                            style={{ color: '#808080' }}
                            size={25}
                            name='close' />
                      </TouchableOpacity>
                  </View>
                </View>
                <ScrollView contentContainerStyle={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text>sdf</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
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
    backgroundColor: 'red',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },

});