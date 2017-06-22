import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
// import {connect} from 'react-redux';
import Colors from '../../../constants/Colors';
import styles from './styles/ViewHangoutScreen';

// @connect(
//   state => ({
//     hangout: state.createHangout // mapstatetoprops
//   }),
//   {createHangout} // mapdispatchtoprops


// ^ create a new action/ reducer that gets hangout by id from backend
// create backend portion that performs get try catch function

// or

// incorporate getAll fetch request and some how pass the props for certain id etc...


export default class ViewHangoutScreen extends Component {



  static navigationOptions = {
    title: 'View Hangout',
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
    }//
  }
  render(){
    const { title, description } = this.props.navigation.state.params;

    // console.log('---------------');
    // console.log(this.props);
    // console.log('---------------');
    return (
      <View>
        <Text>
          {title}
        </Text>
        <View>
          <Text>
            {description}
          </Text>
        </View>
      </View>
    )
  }
}
