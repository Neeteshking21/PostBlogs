const INITIAL_STATE = {
    TOKEN: ""
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CREATE_TOKEN':
            const { TOKEN } = action.payload;
            return {
                ...state,
                TOKEN: TOKEN
            }

        case 'DELETE_TOKEN':
            return {
                ...state,
                TOKEN: ""
            }
        default : return state
    }
}

export default reducer;