import {StackNavigator} from 'react-navigation';
import HomeNavigator from './HomeNavigator';

import {CreateHangoutScreen} from '../screens';

export default StackNavigator({
  Home: {screen: HomeNavigator },
  CreateHangout: {screen: CreateHangoutScreen}
}, {
  mode: 'modal'
});
