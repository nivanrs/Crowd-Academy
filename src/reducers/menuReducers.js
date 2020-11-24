import {
    MENU_TOPIC_GET_REQUEST,
    MENU_TOPIC_GET_SUCCESS,
    MENU_TOPIC_GET_FAIL,
    MENU_COURSE_GET_REQUEST,
    MENU_COURSE_GET_SUCCESS,
    MENU_COURSE_GET_FAIL,
    MENU_COURSE_DETAIL_REQUEST,
    MENU_COURSE_DETAIL_SUCCESS,
    MENU_COURSE_DETAIL_FAIL,
    ENROLL_COURSE_POST_REQUEST,
    ENROLL_COURSE_POST_SUCCESS,
    ENROLL_COURSE_POST_FAIL,
} from "../constants/menuConstants";

export const GetCourseReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case MENU_COURSE_GET_REQUEST:
            return { loading: true, courses: [] };
        case MENU_COURSE_GET_SUCCESS:
            return { loading: false, success:true, courses: action.payload.courses };
        case MENU_COURSE_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const GetCourseDetailReducer = (state = { detailcourses: [] }, action) => {
    switch (action.type) {
        case MENU_COURSE_DETAIL_REQUEST:
            return { loading: true, detailcourses: [] };
        case MENU_COURSE_DETAIL_SUCCESS:
            return { loading: false, success:true, detailcourses: action.payload.detailcourses };
        case MENU_COURSE_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
  
export const GetTopicReducer = (state = { topics: [] }, action) => {
    switch (action.type) {
        case MENU_TOPIC_GET_REQUEST:
            return { loading: true, topics: [] };
        case MENU_TOPIC_GET_SUCCESS:
            return { loading: false, success:true, topics: action.payload };
        case MENU_TOPIC_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const PostEnrollReducer = (state = {}, action) => {
    switch (action.type) {
        case ENROLL_COURSE_POST_REQUEST:
            return { loading: true};
        case ENROLL_COURSE_POST_SUCCESS:
            return { loading: false, status: action.payload };
        case ENROLL_COURSE_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};