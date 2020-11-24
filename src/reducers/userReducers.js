import {
    USER_LOGIN_FAIL,
    USER_LOGIN_UNVERIFIED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_STATUS_RESET,
    USER_ACCOUNT_FAIL,
    USER_ACCOUNT_REQUEST,
    USER_ACCOUNT_SUCCESS,
} from "../constants/userConstants";
  
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, token: action.payload };
    case USER_LOGIN_UNVERIFIED:
      return { loading: false, status: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ACCOUNT_REQUEST:
      return { loading: true };
    case USER_ACCOUNT_SUCCESS:
      return { loading: false, account: action.payload };
    case USER_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
  
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, status: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, status: action.payload };
      case USER_REGISTER_STATUS_RESET:
        return { loading: false, status: null };
      default:
        return state;
    }
};  