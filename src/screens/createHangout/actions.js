import {HangoutApi} from '../../../constants/api';
import {fetchMyHangouts} from '../home/actions'

const hangoutApi = new HangoutApi();

export const CREATE_HANGOUT = 'CREATE_HANGOUT';
export const CREATE_HANGOUT_SUCCESS = 'CREATE_HANGOUT_SUCCESS';
export const CREATE_HANGOUT_ERROR = 'CREATE_HANGOUT_ERROR';

export const createHangout = args => async dispatch => {
  dispatch({type: CREATE_HANGOUT});

  try {
    await hangoutApi.createGroupHangouts(args);
    dispatch({type: CREATE_HANGOUT_SUCCESS});
  } catch(e) {
    return dispatch({type: CREATE_HANGOUT_ERROR})
  }
  return await dispatch(fetchMyHangouts());
};
