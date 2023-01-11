
export const addToken = (data) => {
    return {
        type: "CREATE_TOKEN",
        payload: {
            "TOKEN": data.TOKEN
        }
    }
}

export const removeToken = () => {
    return {
        type: "DELETE_TOKEN"
    }
}