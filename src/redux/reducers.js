import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form'
import {HomeReducer, CreateHangoutReducer, UserReducer} from '../screens';
// import navigation from '../routes/navigationReducer';

export default combineReducers({
  home: HomeReducer,
  createHangout: CreateHangoutReducer,
  // navigation,
  // user: UserReducer,
  form
});
