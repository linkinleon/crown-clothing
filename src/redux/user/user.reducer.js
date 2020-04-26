const INITIAL_VALUE = {
    currentUser : null
}
const UserReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}

export default UserReducer;