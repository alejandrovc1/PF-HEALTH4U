import axios from "axios"
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_FILTER = "CLEAN_FILTER";


export function getDoctors() { //obtener todos los doctores
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/doctors");
        return dispatch({
            type: "GET_DOCTORS",
            payload: json.data
        })
    }
}

export function getSpecialties() { //obtener specialties
    return async function (dispatch) {
        let info = await axios.get("http://localhost:3001/specialties");
        return dispatch({
            type: "GET_SPECIALTIES",
            payload: info.data
        })
    }
}

export const cleanFilter = () => {
    return {
        type: 'CLEAN_FILTER',
        payload: []
    }
}

export const getDetail = (id) => async dispatch => //ir al detail
{
    let respuesta = await axios.get(`http://localhost:3001/doctors/${id}`);


    dispatch({ type: "GET_DETAIL", payload: respuesta.data })

};

export function orderByName(payload) { //ordenar por nombre asc o desc
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}

export function orderByRating(payload) { //ordernar por rating asc o desc
    return {
        type: "ORDER_BY_RATING",
        payload
    }
}

export function filterBySpecialties(payload) {//filtrado por especialidad
    return {
        type: "FILTER_BY_SPECIALTIES",
        payload
    }
}

export function postDoctors(payload, route) { //post doctor
    return async function (dispatch) {
        console.log(payload)

        const response = await axios.post("http://localhost:3001/doctors/register", payload);
        return dispatch({
            type: "POST_DOCTOR",
            payload: response
        })
    }
}

export function login(payload) {//login
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/login", payload)
        return dispatch({
            type: "LOGIN",
            payload: response
        })
    }
}
