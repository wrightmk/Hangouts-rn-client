import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles22 from './styles2/AllMeetups';

const MyMeetupsList = ({meetups2 = []}) => (
  <View style={styles2.root}>
    <View style={styles2.titleContainer}>
      <Text style={styles2.title}>All Hangoutsh</Text>
    </View>
    <View style={styles2.contentContainer}>
       <ScrollView horizontal>
         {meetups2.map((meetup, i) => (
           <View key={i} style={styles2.meetupCard}>
             <View style={styles2.meetupCardTopContainer}>
               <Text style={styles2.meetupCardTitle}>
                 {meetup.title}
               </Text>
               <View>
                 <Text style={styles2.meetupCardDescription}>
                   {meetup.description}
                 </Text>
               </View>
             </View>

             <View style={styles2.meetupCardBottomContainer}>
               <Text style={styles2.meetupCardMetaName}>
                 {meetup.group.name}
               </Text>
               <Text style={styles2.meetupCardMetaDate}>
                 {meetup.createdAt}
               </Text>
             </View>

           </View>
         ))}
       </ScrollView>
    </View>
  </View>
);

export default MyMeetupsList;
