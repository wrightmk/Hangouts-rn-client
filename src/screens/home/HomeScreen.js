import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import {connect} from 'react-redux';

import {LoadingScreen} from '../../commons';
import {MyHangoutsList} from './components';

import {fetchMyHangouts} from './actions';
import styles from './styles/HomeScreen';
import Colors from '../../../constants/Colors';

@connect(
  state => ({
    myHangouts: state.home.myHangouts, //mapstatetoprops

  }),
  {fetchMyHangouts} //mapdispatchtoprops type: etc
)

class HomeScreen extends Component {
  static navigationOptions = {
    header: ({navigate}) => {
      const style = {backgroundColor: Colors.redColor};

      const right = (
        <TouchableOpacity style={styles.iconAdd} onPress={() => navigate('CreateHangout')}>
          <MaterialIcons
            name="add-circle"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      );

      const left = (
        <TouchableOpacity style={styles.iconAddLeft} onPress={() => navigate('ViewHangout')}>
          <MaterialIcons
            name="add-circle"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      );

      return {style, right, left};
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
    this.props.fetchMyHangouts();
  }

  render() {
    const {
      myHangouts: {
        isFetched,
        data,
        error
      },
      navigation
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
          {/* <Image source={{uri: 'http://24.media.tumblr.com/tumblr_mej8exgplo1rpgf8io1_500.png'}} */}
            {/* style={{width: 370, height: 780, opacity: 0.7}} /> */}
        </View>
        <View style={styles.bottomContainer}>
            <MyHangoutsList hangouts={data} navigation={navigation} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
