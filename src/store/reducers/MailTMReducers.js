import { GET_TM_EMAILS, GET_TM_EMAILS_TOTAL } from '../Constants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TM_EMAILS:
      return {
        ...state,
        tm_mails: action.payload,
      };
    case GET_TM_EMAILS_TOTAL:
      return {
        ...state,
        tm_count: action.payload,
      };
    default:
      return state;
  }
};
