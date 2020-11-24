import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userAccountReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { GetTopicReducer, GetCourseReducer, GetCourseDetailReducer, PostEnrollReducer } from './reducers/menuReducers';
import { GetEnrollCourseReducer } from './reducers/courseReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userAccount: userAccountReducer,
  userRegister: userRegisterReducer,
  menuTopicData: GetTopicReducer,
  menuCourseData: GetCourseReducer,
  menuCourseDetail: GetCourseDetailReducer,
  enrollCourse: PostEnrollReducer,
  userCourseData: GetEnrollCourseReducer,
});

const userInfoFromStorage = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const userIDFromStorage = localStorage.getItem('userID') ? localStorage.getItem('userID') : null;
const accountInfoFromStorage = localStorage.getItem('account') ? localStorage.getItem('account') : null;

const initialState = {
  userLogin: { token: userInfoFromStorage, userID: userIDFromStorage },
  userAccount: { account: accountInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;