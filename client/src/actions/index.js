

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

export function filterSpecialties(payload) {//filtrado por especialidad
    return {
        type: "FILTER_BY_SPECIALTIES",
        payload
    }
}