import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_UNVERIFIED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_ACCOUNT_FAIL,
  USER_ACCOUNT_REQUEST,
  USER_ACCOUNT_SUCCESS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("http://localhost:9000/api/login", { email, password }, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.token,
    });

    dispatch({
      type: USER_LOGIN_UNVERIFIED,
      payload: data.status,
    });

    localStorage.setItem("userID", data.userID);
    localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      // @TODO fix the error
      payload: error.response,
    });
  }
};

export const UserAccount = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_ACCOUNT_REQUEST,
    });

    dispatch({
      type: USER_ACCOUNT_SUCCESS,
      payload: email,
    });

    localStorage.setItem("account", email);
  } catch (error) {
    dispatch({
      type: USER_ACCOUNT_FAIL,
      // @TODO fix the error
      payload: error.response,
    });
  }
};

export const register = (FirstName, LastName, email, password, role, isVerified) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("http://localhost:9000/api/registration/add", { FirstName, LastName, email, password, role, isVerified }, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.status,
    });

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      // @TODO fix the error
      payload: error.response.data.error_details,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userID");
  localStorage.removeItem("token");
  localStorage.removeItem("account");
  dispatch({
    type: USER_LOGOUT,
  })
}
