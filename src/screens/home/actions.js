import {HangoutApi} from '../../../constants/api';

const hangoutApi = new HangoutApi();

export const FETCH_MY_HANGOUTS = 'FETCH_MY_HANGOUTS';

export const fetchMyHangouts = () => ({
  type: FETCH_MY_HANGOUTS,
  payload: hangoutApi.fetchGroupHangout()
});
