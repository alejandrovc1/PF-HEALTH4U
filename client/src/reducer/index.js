const initialState = { //estados iniciales
    "aun nose que hira aca":[]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        /*
         case "ORDER_BY_NAME": //ordenar alfabeticamente
                    let sortedArr = action.payload === "asc" ? state.("Los doctores").sort(function (a, b) { //si es ascendente
                            if (a.name.toLowerCase() > b.name.toLowerCase()) { // accede al estado doctor y le hace un sort
                                return 1; // los ordena de manera ascendente
                            }
                            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                                return -1;
                            }
                            return 0
                        }) :
                        state.("Los doctores").sort(function (a, b) { //sort ordena por unicode, las letras tienen un valor asignado
                            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                return -1
                            }
                            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                                return 1
                            }
                            return 0
                        })
                    return {
                        ...state,
                        ("Los doctores"): sortedArr
                    }


                    case "FILTER_BY_SPECIALTIES": //filtrar por especialidad
                                    let filterEspe = state.("Los doctores").filter(p => { //filtro los doctores buscando coincidencia
                                        if(p.("La especialidad")?.includes(action.payload)) return p  //si la especialidad es la misma a la del payload me lo trae
                                    })
                                    if(action.payload === "All"){
                                        filterEspe = state.("Los doctores")
                                    }
                                    return {
                                        ...state,
                                        ("Los doctores"): filterEspe
                                    }


                                    case "ORDER_BY_RATING": //ordenar por rating
                                    let sortedArrRating;
                                    if(action.payload === "menor"){
                                        sortedArrRating = state.("Los doctores").sort(function (a, b) { //si es ascendente
                                            if (a.rating > b.rating) { // accede al estado doctor y le hace un sort
                                                 return 1; // los ordena de manera ascendente
                                            }
                                            if (b.rating > a.rating) {
                                                return -1;
                                            }
                                            return 0
                                        })
                                    } else if (action.payload === "mayor"){
                                        sortedArrRating = state.("Los doctores").sort(function (a, b) {
                                            if (a.rating > b.rating) {
                                                return -1
                                            }
                                            if (b.rating > a.rating) {
                                                return 1
                                            }
                                            return 0
                                        })
                                    }
                                    return {
                                        ...state,
                                        ("Los doctores"): sortedArrRating
                                    }*/
        default:
            return state;
    }
}

export default rootReducer;