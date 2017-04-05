import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import imageStyle from './styles/LoginScreen';
import styled from 'styled-components/native';

import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';

//different way of styling using styled-components library


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
  flex: 0.2;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  backgroundColor: ${({color}) => color};
`;

export default class LoginScreen extends Component {
  state ={}
  render() {
    return (
      // <Image source={{uri: 'https://www.xda-developers.com/wp-content/uploads/2015/09/Mountain_Landscape_Lock_Screen_1440x2560_Samsung.jpg'}}
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

              <FlexContainer >
                <Text style={Fonts.authWelcomeText}>
                  Start managing your <MeetupText>Hangouts</MeetupText> quickly and efficiently
                </Text>
              </FlexContainer>

            </FlexContainer>

              <BottomButtonWrapper>
                <Button color={Colors.signupButtonBackgroundColor}>
                  <Text style={Fonts.buttonAuth}>Sign Up</Text>
                </Button>
                <Button color={Colors.signinButtonBackgroundColor}>
                  <Text style={Fonts.buttonAuth}>Sign In</Text>
                </Button>
              </BottomButtonWrapper>

          </FlexContainer>
        </FlexContainerWrapper>
      // </Image>

    );
  }
}
