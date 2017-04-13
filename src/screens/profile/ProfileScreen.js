import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import styled from 'styled-components/native';

import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';
import styles from './styles/ProfileScreen';



const FlexContainerWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  backgroundColor: ${({color}) => color};
`;

const FlexContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MeetupText = styled.Text`
  color: ${Colors.redColor};
  fontSize: 18;
  fontFamily: montserratBold;
`;
//can wrap materialicons in the View(dasdas)
const BottomButtonWrapper = styled.View`
  flex: 0.5;
  flex-direction: row;
  marginLeft: 20;
  marginRight: 20;
  marginBottom: 20;
`;


const Button2 = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  backgroundColor: ${({color}) => color};
`;


class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: {
      style: {backgroundColor: Colors.redColor}
    },
    tabBar: {
      icon: ({tintColor}) => (
        <MaterialIcons
          name="account-circle"
          size={25}
          color={tintColor}
        />
      )
    },
  }
// style={styles.buttonCreate}
  render() {
    return (

        <FlexContainer>
          <Text style={styles.filler}>Filler</Text>
          <Text style={styles.filler}>Filler</Text>
          <View style={styles.profilepicWrap}>
            <Image style={styles.profilepic} source={require('./profile.png')}/>
          </View>
          <FlexContainer>
            <Text style={Fonts.authWelcomeTitle}>Hello Mitchell</Text>
          </FlexContainer>
          <FlexContainer>
            <FlexContainer >

              {/* <Text style={Fonts.authWelcomeTitle}>Welcome!</Text> */}

              <FlexContainer >
                <Text style={Fonts.authWelcomeText}>
                  Start managing your <MeetupText>Hangouts</MeetupText> quickly and efficiently
                </Text>
              </FlexContainer>

            </FlexContainer>

              <BottomButtonWrapper>
                <Button2 color={Colors.signupButtonBackgroundColor}>
                  <Text style={Fonts.buttonAuth}>Log Out</Text>
                </Button2>

              </BottomButtonWrapper>

          </FlexContainer>
        </FlexContainer>

      );
    }
  }


export default ProfileScreen;
