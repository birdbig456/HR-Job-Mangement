import { CREATEWORKFORCE_ACTION_CREATE } from "../constants/Constants";


export default (state = [], { type, payload }) => {
    switch (type) {

    case CREATEWORKFORCE_ACTION_CREATE:
        return { ...state, ...payload }

    default:
        return state
    }
}
