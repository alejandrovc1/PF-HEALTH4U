const initialState = { //estados iniciales
    cargadoDetail: false,
    doctors: [],
    doctorsCopy: [],
    doctorDetail: [],
    doctorPut:'',
    patients: [],
    patientsCopy: [],
    patientDetail: [],
    patientPut:'',
    specialties: [],
    isLogged: {},
    role:''
};


function rootReducer(state = initialState, action){
    switch (action.type){

        case "GET_ROLE":
            return{
                ...state,
                role:action.payload
            }
        
        case "GET_PATIENTS":
            return{
                ...state,
                patients: action.payload,
                patientsCopy: action.payload
            }
    
        case "GET_PATIENT_PROFILE": 
            return{
                ...state,
                patientDetail: action.payload 
            }
    
        case "PUT_PATIENT_PROFILE":
            return{
                ...state,
                patientPut:action.payload
            }

        case "PUT_PATIENT_PROFILE_ADMIN":
            return{
                ...state,
                patientPut:action.payload
            }
            
        case "POST_PATIENT":
            return {
                ...state
            }
        
        case "DELETE_PATIENT":
            return{
                ...state,
                patients: state.patients.filter((pat) => pat._id !== action.payload),
                patientsCopy: state.patientsCopy.filter((pat) => pat._id !== action.payload)
            }

        case "GET_DOCTORS":
            return {
                ...state,
                doctors: action.payload,
                doctorsCopy: action.payload
            }
            
        case "GET_DOCTOR_DETAIL":
            return {
                ...state,
                doctorDetail: action.payload,
                cargadoDetail: true
            }

        case "PUT_DOCTOR":
            return{
                ...state,
                doctorPut:action.payload
            }
            
        case "PUT_DOCTOR_ADMIN":
            return{
                ...state,
                doctorPut:action.payload
            }
        
        case "POST_DOCTOR":
            return {
                ...state
            }
        
        case "DELETE_DOCTOR":
            return{
                ...state,
                doctors: state.doctors.filter((doc) => doc.id !== action.payload),
                doctorsCopy: state.doctorsCopy.filter((doc) => doc.id !== action.payload)
            }
            
        case "GET_SPECIALTIES":
            return {
                ...state,
                specialties: action.payload
            }

        case "CLEAN_DETAIL":
            return {
                ...state,
                detail: action.payload,
                cargadoDetail: false
            }

        case "ORDER_BY_NAME":
            const nameSorted =
                action.payload === "Any"
                    ? state.doctors
                    : action.payload === "AZ"
                        ? state.doctorsCopy.sort(function (a, b) {
                            if (a.name > b.name) return 1;
                            if (b.name > a.name) return -1;
                            return 0;
                        })
                        : state.doctorsCopy.sort(function (a, b) {
                            if (a.name > b.name) return -1;
                            if (b.name > a.name) return 1;
                            return 0;
                        })
            return {
                ...state,
                doctorsCopy: nameSorted,
            }

        case "FILTER_BY_SPECIALTIES":
            const specialtieFiltered =
                action.payload === "All"
                    ? state.doctors
                    : state.doctorsCopy.filter(d => d.specialtie === action.payload)

            if (specialtieFiltered.length === 0) {
                alert("There's no Doctors with that specialtie.")
                return {
                    ...state,
                    doctorsCopy: state.doctors
                }
            }
            return {
                ...state,
                doctorsCopy: specialtieFiltered
            }

        case "FILTER_BY_METHOD":
            const methodFiltered =
                action.payload === "Any"
                    ? state.doctors
                    : state.doctorsCopy.filter(d => d.method === action.payload)

            if (methodFiltered.length === 0) {
                alert("There's no Doctors with that appointment Method.")
                return {
                    ...state,
                    doctorsCopy: state.doctors
                }
            }
            return {
                ...state,
                doctorsCopy: methodFiltered
            }

        case "ORDER_BY_RATING":
            const ratingSorted =
                action.payload === "Any"
                    ? state.doctors
                    : action.payload === "MinMax"
                        ? state.doctorsCopy.sort(function (a, b) {
                            if (a.rating > b.rating) { return 1; }
                            if (b.rating > a.rating) { return -1; }
                            return 0
                        })
                        : state.doctorsCopy.sort(function (a, b) {
                            if (a.rating > b.rating) { return -1 }
                            if (b.rating > a.rating) { return 1 }
                            return 0
                        })
            return {
                ...state,
                doctorsCopy: ratingSorted
            }

        case "RESET":
            return {
                ...state,
                doctorsCopy: state.doctors
            }

        case "LOGGEDSTATE":
            console.log(action.payload)
            return {
                ...state,
                isLogged: action.payload 
            }

        case "GET_REVIEWS":
            return{
                ...state,
                reviews: action.payload 
            }

        case "GET_REVIEW_BY_DOCTOR":
            return{
                ...state,
                reviews: action.payload 
            }

        case "GET_REVIEW_BY_PATIENT":
            return{
                ...state,
                reviews: action.payload 
            }

        case "GET_REVIEW_DETAIL":
            return{
                ...state,
                reviewDetail: action.payload 
            }

        case "ADD_REVIEW":
            return{
                ...state
            }

        case "CHECKROLE":
            return {
                ...state
            }

        default: return state;
    }
};

export default rootReducer;