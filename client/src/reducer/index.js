const initialState = { //estados iniciales
    Doctors: [],
    allDoctors: [],
    Specialties: [],
    Patients: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DOCTORS": 
            return {
                ...state,
                Doctors: action.payload,
                allDoctors: action.payload 
        }

        case "GET_GENRES": 
            return {
                ...state,
                Specialties: action.payload
        }

        case "POST_DOCTOR":
            return {
                ...state
        }

        case "ORDER_BY_NAME":
            let sortedArr = action.payload === "asc" ? state.Doctors.sort(function (a, b) { 
                if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
                if (b.name.toLowerCase() > a.name.toLowerCase()) { return -1; }
                    return 0 }) 
                        :
                state.Doctors.sort(function (a, b) { 
                    if (a.name.toLowerCase() > b.name.toLowerCase()) { return -1 }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) { return 1 }
                        return 0 })
                            return {
                                ...state,
                                Doctors: sortedArr }
                    

            case "FILTER_BY_SPECIALTIES": 
                let filterEspe = state.Specialties.filter(p => { 
                    if(p.Specialties?.includes(action.payload)) return p })
                    if(action.payload === "All"){ filterEspe = state.Doctors }
                        return {
                            ...state,
                            Doctors: filterEspe } 

                                    
                case "ORDER_BY_RATING": 
                    let sortedArrRating;
                        if(action.payload === "menor"){ sortedArrRating = state.Doctors.sort(function (a, b) { 
                        if (a.rating > b.rating) { return 1; }
                        if (b.rating > a.rating) { return -1; }
                            return 0 
                            })} else if (action.payload === "mayor"){
                                sortedArrRating = state.Doctors.sort(function (a, b) {
                                    if (a.rating > b.rating) { return -1 }
                                    if (b.rating > a.rating) { return 1 }
                                        return 0 })}
                                            return {
                                                ...state,
                                                Doctors: sortedArrRating }
        default:
            return state;
    }
}

export default rootReducer;