import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles/MyHangoutsList';

const MyHangoutsList = ({hangouts = []}) => (
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
           <View key={i} style={styles.hangoutCard}>
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

           </View>
         ))}
       </ScrollView>
    </View>
  </View>
);

export default MyHangoutsList;
