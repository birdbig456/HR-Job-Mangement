import { CREATEPROJECT_ACTION_CREATE } from "../constants/Constants";

const Project = [
    1
]

export default (state = {Project}, { type, payload }) => {
    switch (type) {

    case CREATEPROJECT_ACTION_CREATE:
        state.Project.push(payload)
        
        return { ...state, ...payload}

    default:
        return state
    }
}