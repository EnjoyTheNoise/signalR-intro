import {
  ADD_VALUE_START,
  ADD_VALUE_SUCCESS,
  ADD_VALUE_FAILURE,
  DELETE_VALUE_START,
  DELETE_VALUE_SUCCESS,
  DELETE_VALUE_FAILURE
} from "./valuesActions";

const initialState = {
  isFetching: false,
  error: null
};

function values(state = initialState, action) {
  switch (action.type) {
    case ADD_VALUE_START:
    case DELETE_VALUE_START:
      return {
        ...state,
        isFetching: true
      };
    case ADD_VALUE_FAILURE:
    case DELETE_VALUE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case ADD_VALUE_SUCCESS:
    case DELETE_VALUE_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

export default values;
