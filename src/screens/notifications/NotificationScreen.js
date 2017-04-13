import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Components } from 'expo';

class NotificationsScreen extends Component {
  static navigationOptions = {
    header: {
      style: {backgroundColor: Colors.redColor}
    },
    tabBar: {
      icon: ({tintColor}) => (
        <MaterialIcons
          name="near-me"
          size={25}
          color={tintColor}
        />
      )
    }
  }

  render() {
    return (
      <Components.MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 49.2819605,
          longitude: -123.1108491,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

export default NotificationsScreen;
