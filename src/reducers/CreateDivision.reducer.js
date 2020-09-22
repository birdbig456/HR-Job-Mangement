import { CREATEDIVISION_ACTION_CREATE } from "../constants/Constants";

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CREATEDIVISION_ACTION_CREATE:
        return { ...state, ...payload }

    default:
        return state
    }
}
