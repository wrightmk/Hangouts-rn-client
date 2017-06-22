import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles/MyHangoutsList';

export default class MyHangoutsList extends Component {

  static navigationOptions = {
    title: 'view'
  }

  render() {
    let { navigate } = this.props.navigation;
    // console.log(this.props);
    const { hangouts = [] } = this.props;

    return (
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Hangouts</Text>
        </View>
        <View>
          <Text style={styles.space}>space</Text>
        </View>

        <View style={styles.contentContainer}>
           <ScrollView horizontal>
             {hangouts.map((hangout, i) => (
              <TouchableOpacity key={i} style={styles.hangoutCard} onPress={() => navigate('ViewHangout')}>
                 <View style={styles.hangoutCardTopContainer}>
                   <Text style={styles.hangoutCardTitle}>
                     {hangout.title}
                   </Text>
                   <View>
                     <Text style={styles.hangoutCardDescription}>
                       {hangout.description}
                     </Text>
                   </View>
                 </View>

                 <View style={styles.hangoutCardBottomContainer}>
                   <Text style={styles.hangoutCardMetaName}>
                     {hangout.group.name}
                   </Text>
                   <Text style={styles.hangoutCardMetaDate}>
                     {hangout.createdAt}
                   </Text>
                 </View>
               </TouchableOpacity>
             ))}
           </ScrollView>
        </View>
      </View>
    );
  }

}










// const MyHangoutsList = ({hangouts = []}) => (
//   <View style={styles.root}>
//     <View style={styles.titleContainer}>
//       <Text style={styles.title}>My Hangouts</Text>
//     </View>
//     <View>
//       <Text style={styles.space}>space</Text>
//     </View>
//     <View style={styles.contentContainer}>
//        <ScrollView horizontal>
//          {hangouts.map((hangout, i) => (
//            <View key={i} style={styles.hangoutCard}>
//              <View style={styles.hangoutCardTopContainer}>
//                <Text style={styles.hangoutCardTitle}>
//                  {hangout.title}
//                </Text>
//                <View>
//                  <Text style={styles.hangoutCardDescription}>
//                    {hangout.description}
//                  </Text>
//                </View>
//              </View>
//
//              <View style={styles.hangoutCardBottomContainer}>
//                <Text style={styles.hangoutCardMetaName}>
//                  {hangout.group.name}
//                </Text>
//                <Text style={styles.hangoutCardMetaDate}>
//                  {hangout.createdAt}
//                </Text>
//              </View>
//
//            </View>
//          ))}
//        </ScrollView>
//     </View>
//   </View>
// );
//
// export default MyHangoutsList;
