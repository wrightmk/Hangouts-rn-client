import React, {Component} from 'react';
import {Button} from 'react-native';

export default class TestScreen extends Component {
  static navigationOptions = {
    title: 'Test',
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Test')}
        title="Test Me"
      />
    );
  }
}
