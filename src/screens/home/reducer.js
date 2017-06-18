import {FETCH_MY_HANGOUTS} from './actions';

const INITIAL_STATE = {
  myHangouts: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${FETCH_MY_HANGOUTS}_PENDING`:
    // am i mutating INITIAL_STATE here? instead something like: state = {...state, name: action.payload}
      return INITIAL_STATE;
    case `${FETCH_MY_HANGOUTS}_FULFILLED`:
      return {
        myHangouts: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null
          }
        }
      };
    case `${FETCH_MY_HANGOUTS}_REJECT`:
      return {
        myHangouts: {
          data: [],
          isFetched: true,
          error: {
            on: true,
            message: 'Error when fetching my hangouts'
          }
        }
      };

    default:
      return state;
  }
};
