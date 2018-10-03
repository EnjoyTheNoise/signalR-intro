import axios from "axios";
import { BASE_URL } from "../constants";

export const ADD_VALUE_START = "ADD_VALUE_START";
export const ADD_VALUE_SUCCESS = "ADD_VALUE_SUCCESS";
export const ADD_VALUE_FAILURE = "ADD_VALUE_FAILURE";

export const DELETE_VALUE_START = "DELETE_VALUE_START";
export const DELETE_VALUE_SUCCESS = "DELETE_VALUE_SUCCESS";
export const DELETE_VALUE_FAILURE = "DELETE_VALUE_FAILURE";

const addValueFailure = error => ({
  type: ADD_VALUE_FAILURE,
  error
});

export const addValue = (value, name) => dispatch => {
  dispatch({ type: ADD_VALUE_START });
  axios
    .post(BASE_URL, { name: name, message: value })
    .then(
      () => dispatch({ type: ADD_VALUE_SUCCESS }),
      error => dispatch(addValueFailure(error))
    );
};

const deleteValueFailure = error => ({
  type: DELETE_VALUE_FAILURE,
  error
});

export const deleteValue = id => dispatch => {
  dispatch({ type: DELETE_VALUE_START });
  axios
    .delete(`${BASE_URL}/${id}`)
    .then(
      () => dispatch({ type: DELETE_VALUE_SUCCESS }),
      error => dispatch(deleteValueFailure(error))
    );
};
