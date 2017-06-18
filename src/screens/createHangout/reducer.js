import {CREATE_HANGOUT, CREATE_HANGOUT_SUCCESS, CREATE_HANGOUT_ERROR} from './actions';

const INITIAL_STATE = {
  error: {
    on: false,
    message: null
  },
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_HANGOUT:
      return {
        ...INITIAL_STATE,
        isLoading: true
      };
    case CREATE_HANGOUT_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoading: false
      };
    case CREATE_HANGOUT_ERROR:
      return {
        error: {
          on: true,
          message: 'An Error occurred!'
        },
        isLoading: false
      };
    default:
      return state;
  }
};
