const initialState = { //estados iniciales
    cargadoDetail: false,
    doctors: [],
    doctorsCopy: [],
    doctorDetail: [],
    doctorPut: '',
    patients: [],
    patientsCopy: [],
    patientDetail: [],
    patientPut: '',
    specialties: [],
    reviews: [],
    dates: [],
    hours: [],
    appointments: [],
    isLogged: {},
    role: '',
    messages: [],
    admins: [],
    sub:'',
    query:[],
    Subs: [],
    error:''
};



function rootReducer(state = initialState, action){
    switch (action.type){
        
        case 'GET_DOCTOR_QUERY':
            if(action.payload.length){
                return{
                    ...state,
                    query:[...action.payload]
                } 
            }else{
                return{
                    ...state,
                    query:[]

                }
            }

        case "GET_ERROR":
            return {
                ...state,
                error: action.payload
            }

        case "GET_ROLE":
            return {
                ...state,
                role: action.payload
            }

        case "GET_ADMINS":
            return {
                ...state,
                admins: action.payload
            }

        case "GET_SUB":
            return {
                ...state,
                sub: action.payload
            }

        case "GET_SUBS":
            return{
                ...state,
                Subs: action.payload
            }

        case "GET_PATIENTS":
            return {
                ...state,
                patients: action.payload,
                patientsCopy: action.payload
            }

        case "GET_PATIENT_PROFILE":
            return {
                ...state,
                patientDetail: action.payload
            }

        case "PUT_PATIENT_PROFILE":
            return {
                ...state,
                patientPut: action.payload
            }

        case "PUT_PATIENT_PROFILE_ADMIN":
            return {
                ...state,
                patientPut: action.payload
            }

        case "POST_PATIENT":
            return {
                ...state
            }

        case "DELETE_PATIENT":
            return {
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

        case "GET_DOCTORS_-BLOCKEDS":
            return {
                ...state,
                doctors: action.payload.filter((doc) => doc.status !== "blocked"),
                doctorsCopy: action.payload.filter((doc) => doc.status !== "blocked"),
            }

        case "GET_DOCTOR_DETAIL":
            return {
                ...state,
                doctorDetail: action.payload,
                cargadoDetail: true
            }

        case "PUT_DOCTOR":
            return {
                ...state,
                doctorPut: action.payload
            }

        case "PUT_DOCTOR_ADMIN":
            return {
                ...state,
                doctorPut: action.payload
            }

        case "POST_DOCTOR":
            return {
                ...state
            }

        case "DELETE_DOCTOR":
            return {
                ...state,
                doctors: state.doctors.filter((doc) => doc.id !== action.payload),
                doctorsCopy: state.doctorsCopy.filter((doc) => doc.id !== action.payload)
            }

        case "GET_ESPECIALTIES":
            return {
                ...state,
                specialties: [...action.payload]
            }

        case "CLEAN_DETAIL":
            return {
                ...state,
                detail: action.payload,
                cargadoDetail: false
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

        case "FILTER_BY_AVAILABLE":
            const availableFiltered =
                !action.payload
                ? state.doctors
                : state.doctorsCopy.filter((d, index) => d.id === action.payload[index].id)
            
            if (availableFiltered.length === 0) {
                alert("There's no Doctors with available dates.")
                return {
                    ...state,
                    doctorsCopy: state.doctors
                }
            }
            return {
                ...state, 
                doctorsCopy: availableFiltered
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
            return {
                ...state,
                reviews: action.payload
            }

        case "GET_REVIEW_BY_DOCTOR":
            return {
                ...state,
                reviews: action.payload
            }

        case "GET_REVIEW_BY_PATIENT":
            return {
                ...state,
                reviews: action.payload
            }

        case "GET_REVIEW_DETAIL":
            return {
                ...state,
                reviewDetail: action.payload
            }

        case "ADD_REVIEW":
            return {
                ...state
            }

        case "CHECKROLE":
            return {
                ...state
            }

        case "GET_MESSAGES":
            return {
                ...state,
                messages: action.payload
            }

        case "POST_MESSAGE":
            return {
                ...state,
            }

        case "DISP_DATE_BY_DOCTOR":
            let dates;
            if(action.payload==='There is no Appointments with that doctor ID')dates=[]
             dates = [...action.payload];
            const freeDates = dates.filter(d => d.status === "Free")
            const allDates = freeDates.map(a => {
                const disponibility = {
                    date: a.start.split("T")[0]
                }
                return disponibility
            })
            const dispDate = new Set(allDates)
            return {
                ...state,
                dates: Array.from(dispDate)
            }

        case "DISP_HOUR_BY_DOCTOR":
            const hours = action.payload;
            const freeHours = hours.filter(h => h.status === "Free")
            const dispHour = freeHours.map(a => {
                const disponibility = {
                    hour: a.start.split("T")[1].slice(0, 5) + " - " + a.end.split("T")[1].slice(0, 5)
                }
                return disponibility
            })
            return {
                ...state,
                hours: dispHour
            }

        case "ADD_DISPONIBILITY":
            return {
                ...state
            }

        case "REQUEST_APPOINTMENT":
            return {
                ...state
            }

        case "GET_APPOINTMENTS_BY_DOCTOR":
            return {
                ...state,
                appointments: action.payload
            }

        case "GET_APPOINTMENTS_BY_PATIENT":
            return {
                ...state,
                appointments: action.payload
            }

        case "RESET_REVIEWS":
            return {
                ...state,
                reviews: [],
            }

        case "RESET_APPOINTMENTS":
            return {
                ...state,
                appointments: [],
            }

        default: return state;
    }
};

export default rootReducer;