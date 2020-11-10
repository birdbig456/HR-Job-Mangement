import { CREATELEVEL_ACTION_CREATE } from "../constants/Constants";

const Level = [
    1
]

export default (state = {Level}, { type, payload }) => {
    switch (type) {

    case CREATELEVEL_ACTION_CREATE:
        state.Level.push(payload)
        
        return { ...state, ...payload}

    default:
        return state
    }
}