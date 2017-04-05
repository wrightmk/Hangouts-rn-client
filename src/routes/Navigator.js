// import React from 'react';
// import {View, Text} from 'react-native'

import {StackNavigator} from 'react-navigation';
import HomeNavigator from './HomeNavigator';

import {CreateMeetupScreen} from '../screens';

// class Example extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>
//           Hello
//         </Text>
//       </View>
//     )
//   }
// }

export default StackNavigator({
  Home: {screen: HomeNavigator },
  CreateMeetup: {screen: CreateMeetupScreen}
  // CreateMeetup: {screen: Example}
}, {
  mode: 'modal'
});
