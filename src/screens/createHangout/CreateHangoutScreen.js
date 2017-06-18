import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import {CreateHangoutForm} from './components';
import {LoadingScreen} from '../../commons';
import {createHangout} from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/CreateHangoutScreen';

@connect(
  state => ({
    hangout: state.createHangout // mapstatetoprops
  }),
  {createHangout} // mapdispatchtoprops
)

export default class CreateHangoutScreen extends Component {
  static navigationOptions = {
    title: 'New Hangout',
    header: ({goBack}) => {
      const style = {backgroundColor: Colors.redColor};

      const titleStyle = {color: Colors.whiteColor};

      const left = (
        <TouchableOpacity style={styles.iconClose} onPress={() => goBack()}>
          <MaterialIcons
            name="close"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      );

      return {style, titleStyle, left};
    }
  }

  state = {
    isDateTimePickerVisible: false,
    date: moment()
  }

  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true})

  _handleDateTimePicker = () => this.setState({isDateTimePickerVisible: false})

  _handleDatePicked = date => {
    this.setState({date});
    this._handleDateTimePicker();
  }

  _checkTitle() {
    const {date} = this.state;
    if(date > moment()) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
    return "Choose a Time"
  }

  _checkIfButtonSubmitDisabled() {
    const {date} = this.state;
    if (date > moment()) {
      return false;
    }
    return true;
  }

  _createHangout = async values => {
    await this.props.createHangout(values);
    this.props.navigation.goBack();
  }

  render(){
    const {hangout} = this.props;
    if(hangout.isLoading) {
      return (
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      )
    } else if (hangout.error.on){
      return (
      <View style={styles.root}>
        <Text>{hangout.error.message}</Text>
      </View>
      );
    }
    return(
      <View style={styles.root}>
        <CreateHangoutForm
          createHangout={this._createHangout}
          showDateTimePicker={this._showDateTimePicker}
          checkTitle={this._checkTitle()}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }
}
