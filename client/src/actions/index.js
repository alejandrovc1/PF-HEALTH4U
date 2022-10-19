import axios from "axios"

export function getRole(body) { //
    return async function (dispatch)
    {
        var config = {
            method: 'put',
            url: 'http://localhost:3001/login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : body
          };
        let json = await axios(config);
        return dispatch({
            type: "GET_ROLE",
            payload: json.data
        })
    }
};

export function getDoctors(){ //Obtener todos los doctors
    return async function (dispatch)
    {
        let json = await axios.get("http://localhost:3001/doctors");
        return dispatch({
            type: "GET_DOCTORS",
            payload: json.data
        })
    }
};

export function getDetails(id) { //Obtener el detalle de un doctor
    return async function (dispatch) 
    {
        let respuesta = await axios.get(`http://localhost:3001/doctors/${id}`);
        return dispatch({
            type: "GET_DOCTOR_DETAIL", 
            payload: respuesta.data
        })
    }
};

export function updateDoctor(id, dato){ //Actualizar doctor
    // dato={
    //     ...dato,
    //     tel:parseInt(dato.tel),
    //     birthDate:new Date(dato.birthDate+'T00:00:00.000Z')
    // }
    return async function (dispatch)
    {
        let json = await axios.put("http://localhost:3001/doctors/"+ id, dato);
        return dispatch({
            type: "PUT_DOCTOR",
            payload: json.data
        })
    }
};

export function updateDoctorAdmin(id, dato){ //Actualizar doctor
    // dato={
    //     ...dato,
    //     tel:parseInt(dato.tel),
    //     birthDate:new Date(dato.birthDate+'T00:00:00.000Z')
    // }
    return async function (dispatch)
    {
        let json = await axios.put("http://localhost:3001/doctors/admin/"+ id, dato);
        return dispatch({
            type: "PUT_DOCTOR_ADMIN",
            payload: json.data
        })
    }
};

export function postDoctors(doctor){ //Agregar doctor
    return async function (dispatch)
    {
        const response = await axios.post("http://localhost:3001/doctors/register", doctor);
        return dispatch({
            type: "POST_DOCTOR",
            payload: response
        })
    }
};

export function deleteDoctor(id){ //Eliminar doctor
    return async function(dispatch)
    {
        const deleted = await axios.delete(`http://localhost:3001/doctors/${id}`)
        return dispatch({
            type: "DELETE_DOCTOR",
            payload: deleted
        })
    }
};

export function getPatients(){ //Obtener todos los patients
    return async function (dispatch)
    {
        let json = await axios.get("http://localhost:3001/patients");
        return dispatch({
            type: "GET_PATIENTS",
            payload: json.data
        })
    }
};

export function getprofile(id){ //Obtener el detalle de un patient
    console.log('soy el ID', id)
    return async function (dispatch)
    {
        let json = await axios.get(`http://localhost:3001/patients/${id}`);
        return dispatch({
            type: "GET_PATIENT_PROFILE",
            payload: json.data
        })
    }
};

export function putprofile(id, dato){ //Actualizar patient
    dato={
        ...dato,
        tel:parseInt(dato.tel),
        birthDate:new Date(dato.birthDate+'T00:00:00.000Z')
    }
    return async function (dispatch)
    {
        let json = await axios.put("http://localhost:3001/patients/"+ id, dato);
        return dispatch({
            type: "PUT_PATIENT_PROFILE",
            payload: json.data
        })
    }
};

export function putprofileAdmin(id, dato){ //Actualizar patient
    dato={
        ...dato,
        tel:parseInt(dato.tel),
        birthDate:new Date(dato.birthDate+'T00:00:00.000Z')
    }
    return async function (dispatch)
    {
        let json = await axios.put("http://localhost:3001/patients/admin/"+ id, dato);
        return dispatch({
            type: "PUT_PATIENT_PROFILE_ADMIN",
            payload: json.data
        })
    }
};

export function postPatient(patient){ //Agregar patient
    return async function (dispatch)
    {
        const response = await axios.post("http://localhost:3001/patients/register", patient);
        return dispatch({
            type: "POST_PATIENT",
            payload: response
        })
    }
};

export function deletePatient(id){ //Eliminar patient
    return async function(dispatch)
    {
        const deleted = await axios.delete(`http://localhost:3001/patients/${id}`)
        return dispatch({
            type: "DELETE_PATIENT",
            payload: deleted
        })
    }
};

export function getSpecialties(){ //Obtener specialties
    return async function (dispatch)
    {
        let info = await axios.get("http://localhost:3001/specialties");
        return dispatch({
            type: "GET_ESPECIALTIES",
            payload: info.data
        })
    }
};

export const cleandetail = () => {
    return {
        type: 'CLEAN_DETAIL',
        payload: []
    }
};

export function orderByName(payload){ //Ordenar por nombre asc o desc
    return {
        type: "ORDER_BY_NAME",
        payload
    }
};

export function orderByRating(payload){ //Ordernar por rating asc o desc
    console.log(payload)
    return {
        type: "ORDER_BY_RATING",
        payload
    }
};

export function filterBySpecialties(specialtie){ //Filtro de doctores por especialidad
    return {
        type: "FILTER_BY_SPECIALTIES",
        payload: specialtie
    }
};

export function filterByMethod(method){ //Filtro de doctores por Metodo
    return {
        type: "FILTER_BY_METHOD",
        payload: method
    }
};

export function login(payload) { //Login
    return async function (dispatch) 
    {
        const response = await axios.post("http://localhost:3001/login", payload)
        return dispatch({
            type: "LOGIN",
            payload: response
        })
    }
};

export function reset(){
    return {
        type: 'RESET',
    }
};

export function getReviews(){ //Obtener todas las reviews
    return async function (dispatch)
    {
        let response = await axios.get("http://localhost:3001/reviews");
        return dispatch({
            type: "GET_REVIEWS",
            payload: response.data
        })
    }
};

export function getReviewByDoctor(doctor){ //Obtener las reviews de un doctor
    return async function (dispatch) 
    {
        let response = await axios.get("http://localhost:3001/reviews?doctor="+doctor)
        return dispatch({
            type: "GET_REVIEW_BY_DOCTOR",
            payload: response.data
        })
    }
};

export function getReviewByPatient(patient) //Obtener las reviews hechas por un patient
{
    return async function (dispatch) 
    {
        let response = await axios.get("http://localhost:3001/reviews?patient="+patient)
        return dispatch({
            type: "GET_REVIEW_BY_PATIENT",
            payload: response.data
        })
    }
};

export function getReviewDetail(review){ //Obtener los detalles de una review
    return async function (dispatch) 
    {
        let response = await axios.get("http://localhost:3001/reviews/"+review)
        return dispatch({
            type: "GET_REVIEW_DETAIL",
            payload: response.data
        })
    }
};

export function addReview(review){ //Agregar una review
    return async function (dispatch) 
    {
        console.log("action: ",review)
        let response = await axios.post("http://localhost:3001/reviews/create", review)
        if(response.status === 200){
            alert("Review Added successfully")
        }
        return dispatch({
            type: "ADD_REVIEW",
            payload: response.data
        })
    }
};

export function loggedState(data) {
    console.log(data)
    return {
        type: 'LOGGEDSTATE',
        payload: data
    }
};

export function checkRole(id) {
    return async function (dispatch)
    {
        let role = await axios.get("http://localhost:3001/checkrole/" + id);
        return dispatch({
            type: "CHECKROLE",
            payload: role.data
        })
    }
};

export function dispDateByDoctor(doctor) {
    return async function (dispatch) {
        let appointments = await axios.get("http://localhost:3001/appointments?doctor=" + doctor)
        return dispatch({
            type: "DISP_DATE_BY_DOCTOR",
            payload: appointments.data
        })
    }
}

export function dispHourByDoctor(doctor) {
    return async function (dispatch) {
        let appointments = await axios.get("http://localhost:3001/appointments?doctor=" + doctor)
        return dispatch({
            type: "DISP_HOUR_BY_DOCTOR",
            payload: appointments.data
        })
    }
}

export function addDisponibility(disponibility) {
    return async function (dispatch) {
        const dispo = {
            start: disponibility.date + "T" + disponibility.hour.split(" - ")[0] + ":00.000Z",
            end: disponibility.date + "T" + disponibility.hour.split(" - ")[1] + ":00.000Z",
            doctor: disponibility.doctor
        }
        let response = await axios.post("http://localhost:3001/appointments/create", dispo)
        return dispatch({
            type: "ADD_DISPONIBILITY",
            payload: response.data
        })
    }
}

export function requestAppointment(appointment) {
    return async function (dispatch) {
        const appo = {
            start: appointment.date + "T" + appointment.hour.split(" - ")[0] + ":00.000Z",
            patient: appointment.patient
        }
        console.log("Action: ", appo)
        let response = await axios.put("http://localhost:3001/appointments/update", appo)
        if(response.status === 200) {
            alert("Appointment Successfully requested")
        } else alert(response.data)
        return dispatch({
            type: "REQUEST_APPOINTMENT",
            payload: response.data
        })
    }
}

export function resetReviews() {
    return {
        type: 'RESET_REVIEWS',
    }
}