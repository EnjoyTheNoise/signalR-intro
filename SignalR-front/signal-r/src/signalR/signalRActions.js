import axios from "axios";

export const GET_ALL_VALUES_SUCCESS = "GET_ALL_VALUES_SUCCESS";
export const GET_ALL_VALUES_FAILURE = "GET_ALL_VALUES_FAILURE";
export const GET_ALL_VALUES_START = "GET_ALL_VALUES_START";

export const NOTIFY_VALUE_ADDED = "NOTIFY_VALUE_ADDED";
export const NOTIFY_VALUE_DELETED = "NOTIFY_VALUE_DELETED";

const addValue = value => ({
  type: NOTIFY_VALUE_ADDED,
  payload: value
});

export const notifyValueAdded = value => dispatch => {
  console.log(value);
  dispatch(addValue(value));
};

const deleteValue = value => ({
  type: NOTIFY_VALUE_DELETED,
  payload: value.message
});

export const notifyValueDeleted = value => dispatch => {
  dispatch(deleteValue(value));
};

const getValuesSuccess = values => ({
  type: GET_ALL_VALUES_SUCCESS,
  payload: values
});

const getValuesFailure = error => ({
  type: GET_ALL_VALUES_SUCCESS,
  error
});

export const getAllValues = () => dispatch => {
  dispatch({ type: GET_ALL_VALUES_START });
  return axios.get("https://localhost:44378/api/values").then(
    response => {
      dispatch(getValuesSuccess(response.data));
    },
    error => dispatch(getValuesFailure(error))
  );
};
