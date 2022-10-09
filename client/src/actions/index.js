import axios from "axios"
export const GET_DETAIL = "GET_DETAIL";


export function getDoctors()
{ //obtener todos los doctores
    return async function (dispatch)
    {
        let json = await axios.get("http://localhost:3001/doctors");
        return dispatch({
            type: "GET_DOCTORS",
            payload: json.data
        })
    }
}

export function getSpecialties()
{ //obtener specialties
    return async function (dispatch)
    {
        let info = await axios.get("http://localhost:3001/specialties");
        return dispatch({
            type: "GET_SPECIALTIES",
            payload: info.data
        })
    }
}

export const cleandetail = () =>
{
    return {
        type: 'CLEAN_DETAIL',
        payload: []
    }
}

export const getDetail = (id) => async dispatch => //ir al detail
{
    let respuesta = await axios.get(`http://localhost:3001/doctors/${id}`);


    dispatch({ type: "GET_DETAIL", payload: respuesta.data })

};

export function orderByName(payload)
{ //ordenar por nombre asc o desc
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}

export function orderByRating(payload)
{ //ordernar por rating asc o desc
    console.log(payload)
    return {
        type: "ORDER_BY_RATING",
        payload
    }
}

export function filterBySpecialties(specialtie)
{//filtrado por especialidad
    return {
        type: "FILTER_BY_SPECIALTIES",
        payload: specialtie
    }
}

export function filterByMethod(method)
{   //Filtro de doctores por Metodo
    return {
        type: "FILTER_BY_METHOD",
        payload: method
    }
}

export function postDoctors(doctor)
{ //post doctor
    return async function (dispatch)
    {
        const response = await axios.post("http://localhost:3001/doctors/register", doctor);
        return dispatch({
            type: "POST_DOCTOR",
            payload: response
        })
    }
}

export function postPatient(patient) {
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/patients/register", patient)
        return dispatch({
            type: "POST_PATIENT",
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

export function getReviews()
{ //obtener todas las reviews
    return async function (dispatch)
    {
        let response = await axios.get("http://localhost:3001/reviews");
        return dispatch({
            type: "GET_REVIEWS",
            payload: response.data
        })
    }
}

export function getReviewByDoctor(doctor)
{
    return async function (dispatch) {
        let response = await axios.get("http://localhost:3001/reviews?doctor="+doctor)
        return dispatch({
            type: "GET_REVIEW_BY_DOCTOR",
            payload: response.data
        })
    }
}

export function getReviewByPatient(patient)
{
    return async function (dispatch) {
        let response = await axios.get("http://localhost:3001/reviews?patient="+patient)
        return dispatch({
            type: "GET_REVIEW_BY_PATIENT",
            payload: response.data
        })
    }
}

export function getReviewDetail(review)
{
    return async function (dispatch) {
        let response = await axios.get("http://localhost:3001/reviews/"+review)
        return dispatch({
            type: "GET_REVIEW_DETAIL",
            payload: response.data
        })
    }
}

export function addReview(review)
{
    return async function (dispatch) {
        let response = await axios.post("http://localhost:3001/reviews/create", review)
        return dispatch({
            type: "ADD_REVIEW",
            payload: response.data
        })
    }
}

export function reset() {
    return {
        type: 'RESET',
    }
}