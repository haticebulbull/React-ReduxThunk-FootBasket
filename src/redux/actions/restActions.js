import axios from "axios";
import ActionTypes from "../actionTypes";

// normal redux action
export const setRestaurants = async (payload) => {
  return {
    type: ActionTypes.REST_SUCCESS,
    payload,
  };
};

// redyx thunk asenkron action
// fonksiyon içerisinde fonksiyon return eder

export const getRestaurants = () => {
  return (dispatch) => {
    // asenkron işlemler yapılabilir

    // dispatch ile reducer'a haber gönderilebilir
    dispatch({ type: ActionTypes.REST_LOADING });

    axios
      .get("http://localhost:3000/restaurants")
      .then((res) =>
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: ActionTypes.REST_ERROR, payload: err }));
  };
};
