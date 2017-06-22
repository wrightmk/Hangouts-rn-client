import {StackNavigator} from 'react-navigation';
import HomeNavigator from './HomeNavigator';

import {CreateHangoutScreen, ViewHangoutScreen} from '../screens';

export default StackNavigator({
  Home: {screen: HomeNavigator },
  CreateHangout: {screen: CreateHangoutScreen},
  ViewHangout: {screen: ViewHangoutScreen},
  Test: {screen: ViewHangoutScreen},
}, {
  mode: 'modal'
});
