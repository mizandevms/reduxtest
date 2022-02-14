import { USER } from '../ActionType';

const { USER_CREATE } = USER;

const initialState = {
    loading: "",
    user: [],
    msg: "",
}

export default (currentState =  initialState , action) => {
    switch (action.type) {
        case USER_CREATE:
            return {
                ...currentState,
                user: action.payLoad,
            }
        default:
            return currentState;
    }
}