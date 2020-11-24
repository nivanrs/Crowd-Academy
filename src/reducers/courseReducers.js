import {
    ENROLL_COURSE_GET_FAIL,
    ENROLL_COURSE_GET_REQUEST,
    ENROLL_COURSE_GET_SUCCESS,
    USER_COURSE_POST_FAIL,
    USER_COURSE_POST_REQUEST,
    USER_COURSE_POST_SUCCESS,
    USER_COURSE_STATUS_RESET,
} from "../constants/courseConstants";

export const GetEnrollCourseReducer = (state = { enrolls: [] }, action) => {
    switch (action.type) {
        case ENROLL_COURSE_GET_REQUEST:
            return { loading: true, enrolls: [] };
        case ENROLL_COURSE_GET_SUCCESS:
            return { loading: false, success:true, enrolls: action.payload.enrolls };
        case ENROLL_COURSE_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
  
export const PostCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_COURSE_POST_REQUEST:
            return { loading: true };
        case USER_COURSE_POST_SUCCESS:
            return { loading: false, course: action.payload };
        case USER_COURSE_POST_FAIL:
            return { loading: false, error: action.payload };
        case USER_COURSE_STATUS_RESET:
            return { loading: false, status: null };
        default:
            return state;
    }
};