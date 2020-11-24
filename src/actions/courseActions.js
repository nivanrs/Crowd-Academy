import axios from "axios";
import {
    ENROLL_COURSE_GET_REQUEST,
    ENROLL_COURSE_GET_SUCCESS,
    ENROLL_COURSE_GET_FAIL,
    USER_COURSE_POST_REQUEST,
    USER_COURSE_POST_SUCCESS,
    USER_COURSE_POST_FAIL,
} from "../constants/courseConstants";
import { logout } from './userActions';

export const GetEnrollCourse = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ENROLL_COURSE_GET_REQUEST,
        })

        const { 
            userLogin: { token },
        } = getState()

        const userID = localStorage.getItem("userID");

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${token}`,
            },
        };
        const { data } = await axios.get(`http://localhost:9000/api/course/enroll/${userID}`, config);

        dispatch({
            type: ENROLL_COURSE_GET_SUCCESS,
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
            type: ENROLL_COURSE_GET_FAIL,
            payload: message,
        })
    }
}

export const AddCourse = ( NamaKursus, IDTopik, PencapaianKursus, FiturKursus, DeskripsiKursus) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_COURSE_POST_REQUEST,
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

        const { data: {data} } = await axios.post("http://localhost:9000/api/course/add", {
            NamaKursus: NamaKursus,
            IDTopik: IDTopik,
            PencapaianKursus: PencapaianKursus,
            FiturKursus: FiturKursus,
            DeskripsiKursus: DeskripsiKursus
        }, config);

        dispatch({
            type: USER_COURSE_POST_SUCCESS,
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
            type: USER_COURSE_POST_FAIL,
            payload: message,
        })
    }
}