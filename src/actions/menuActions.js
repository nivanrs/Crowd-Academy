import axios from "axios";
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
import { logout } from './userActions';

export const GetTopic = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: MENU_TOPIC_GET_REQUEST,
        })

        const { 
            userLogin: { token },
        } = getState()

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${token}`,
            },
        };
        const { data } = await axios.get("http://localhost:9000/api/menu/topic/", config);

        dispatch({
            type: MENU_TOPIC_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: MENU_TOPIC_GET_FAIL,
            payload: message,
        })
    }
}

export const GetCourse = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: MENU_COURSE_GET_REQUEST,
        })

        const { 
            userLogin: { token },
        } = getState()

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${token}`,
            },
        };
        const { data } = await axios.get("http://localhost:9000/api/menu/course/", config);

        dispatch({
            type: MENU_COURSE_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: MENU_COURSE_GET_FAIL,
            payload: message,
        })
    }
}

export const GetCourseDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MENU_COURSE_DETAIL_REQUEST,
        })

        const { 
            userLogin: { token },
        } = getState()

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${token}`,
            },
        };
        const { data } = await axios.get(`http://localhost:9000/api/menu/course/detail/${id}`, config);

        dispatch({
            type: MENU_COURSE_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: MENU_COURSE_DETAIL_FAIL,
            payload: message,
        })
    }
}

export const EnrollCourse = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ENROLL_COURSE_POST_REQUEST,
        })

        const { 
            userLogin: { token },
        } = getState()

        const account = localStorage.getItem("account");

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${token}`,
            },
        };
        const { data } = await axios.post(`http://localhost:9000/api/menu/course/enroll/${id}`, { account }, config);

        dispatch({
            type: ENROLL_COURSE_POST_SUCCESS,
            payload: data.status,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ENROLL_COURSE_POST_FAIL,
            payload: message,
        })
    }
}