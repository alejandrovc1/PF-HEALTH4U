import axios from "axios"


export function getDoctors() { //obtener todos los doctores
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/doctor"); 
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

export function postDoctors(payload) { //post doctor
    return async function () {
        const response = await axios.post("http://localhost:3001/doctor/register", payload);
            return response
    }
}

