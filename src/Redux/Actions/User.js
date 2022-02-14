import { USER } from '../ActionType';

const { USER_CREATE } = USER;

export const createUser = (data) => {
    return {
        type: USER_CREATE,
        payload: data,
    }
}