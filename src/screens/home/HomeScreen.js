import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import {connect} from 'react-redux';

import {LoadingScreen} from '../../commons';
import {MyMeetupsList} from './components';

import {fetchMyMeetups} from './actions';
import styles from './styles/HomeScreen';
import Colors from '../../../constants/Colors';
import MapView from 'react-native-maps';

// import {MapView} from 'expo';

// import {CreateMeetup} from '../createMeetup/CreateMeetupScreen'


@connect(
  state => ({
    myMeetups: state.home.myMeetups
  }),
  {fetchMyMeetups}
)

class HomeScreen extends Component {
  static navigationOptions = {
    header: ({navigate}) => {
      const style = {backgroundColor: Colors.redColor};

      const right = (
        <TouchableOpacity style={styles.iconAdd} onPress={() => navigate('CreateMeetup')}>
          <MaterialIcons
            name="add-circle"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      );

      return {style, right};
    },
    tabBar: {
      icon: ({tintColor}) => (
        <FontAwesome
          name="home"
          size={25}
          color={tintColor}
        />
      )
    }
  }

  componentDidMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    const {
      myMeetups: {
        isFetched,
        data,
        error
      }
    } = this.props;
    if(!isFetched) {
      return <LoadingScreen/>;
    } else if(error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          {/* <Image source={require('./hangouts2.jpeg')}
            style={{width: 370, height: 640}} /> */}
          <Image source={{uri: 'http://24.media.tumblr.com/tumblr_mej8exgplo1rpgf8io1_500.png'}}
            style={{width: 370, height: 780}} />
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
