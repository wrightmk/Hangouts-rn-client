import React, {Component} from 'react';
import Expo from 'expo';

import {Text, View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import imageStyle from './styles/LoginScreen';
import styled from 'styled-components/native';

import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';


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

const HangoutText = styled.Text`
  color: ${Colors.redColor};
  fontSize: 18;
  fontFamily: montserratBold;
`;
//can wrap materialicons in the View(dasdas)
const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flex-direction: row;
`;

const Button2 = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  backgroundColor: ${({color}) => color};
`;

export default class LoginScreen extends Component {
  state ={}
  render() {
    return (
      // <Image source={{uri: 'http://edmchicago.com/wp-content/uploads/2016/04/concert.jpg'}}
      //  style={{width: 370, height: 640}} >

        <FlexContainerWrapper color={Colors.loginbackgroundColor}>

          <FlexContainer>
            <Text style={Fonts.authTitle}>Hangouts</Text>
          </FlexContainer>
          <FlexContainer>
            <FlexContainer >

              <FlexContainer >
                <Text style={Fonts.authWelcomeTitle}>Welcome!</Text>
              </FlexContainer>

              <FlexContainer>
                <View>
                  <Button
                    raised
                    onPress={this.login}
                    icon={{name: 'cached'}}
                    title='Sign in with Facebook' />
                </View>
              </FlexContainer>

              <FlexContainer >
                <Text style={Fonts.authWelcomeText}>
                  Start managing your <HangoutText>Hangouts</HangoutText> quickly and efficiently
                </Text>
              </FlexContainer>

            </FlexContainer>

              <BottomButtonWrapper>
                <Button2 color={Colors.signupButtonBackgroundColor}>
                  <Text style={Fonts.buttonAuth}>Sign Up</Text>
                </Button2>
                <Button2 color={Colors.signinButtonBackgroundColor}>
                  <Text style={Fonts.buttonAuth}>Sign In</Text>
                </Button2>
              </BottomButtonWrapper>

          </FlexContainer>
        </FlexContainerWrapper>
      // </Image>

    );
  }
}
