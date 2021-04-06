import { CREATETASKVALUE_ACTION_CREATE } from "../constants/Constants";





export default (state = [], { type, payload }) => {
    switch (type) {

        case CREATETASKVALUE_ACTION_CREATE:
            state.push(payload)

        return { ...state, ...payload }

    default:
        return state
    }
}
