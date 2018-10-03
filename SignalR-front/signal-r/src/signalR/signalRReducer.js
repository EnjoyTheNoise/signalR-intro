import {
  NOTIFY_VALUE_ADDED,
  NOTIFY_VALUE_DELETED,
  GET_ALL_VALUES_FAILURE,
  GET_ALL_VALUES_SUCCESS,
  GET_ALL_VALUES_START
} from "./signalRActions";

const initialState = {
  values: [],
  error: null,
  isFetching: false
};

function signalR(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_VALUES_START:
      return {
        ...state,
        isFetching: true
      };
    case GET_ALL_VALUES_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case GET_ALL_VALUES_SUCCESS:
      return {
        ...state,
        values: action.payload,
        isFetching: false
      };
    case NOTIFY_VALUE_ADDED:
      return {
        ...state,
        values: [...state.values, action.payload]
      };
    case NOTIFY_VALUE_DELETED:
      return {
        ...state,
        values: [
          ...state.values.filter(item => item.message !== action.payload)
        ]
      };
    default:
      return state;
  }
}

export default signalR;
