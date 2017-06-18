import {TabNavigator} from 'react-navigation';
import Colors from '../../constants/Colors';
import {HomeScreen,
        MapScreen
       } from '../screens';
import ProfileScreen from '../screens/profile/ProfileScreen.js';


export default TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: MapScreen
  },
  ProfileScreen: {
    screen: ProfileScreen
  }
}, {
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.redColor,
    pressColor: Colors.redColor,
    indicatorStyle: {backgroundColor: Colors.redColor},
    style: {
      backgroundColor: Colors.whiteColor
    }
  }
});
