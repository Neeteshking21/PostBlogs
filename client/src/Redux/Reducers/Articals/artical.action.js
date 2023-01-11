export const createArtical = (data) => {
    return {
        type: "CREATE_ARTICAL",
        payload: {
            "TOKEN": data.TOKEN
        }
    }
}

export const updateArtical = () => {
    return {
        type: "UPDATE_ARTICAL"
    }
}

export const deleteArtical = () => {
    return {
        type: "DELETE_ARTICAL"
    }
}