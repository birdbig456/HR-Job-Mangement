import { CREATETASK_ACTION_CREATE } from "../constants/Constants";


const Task = [
    1
]

export default (state = {Task}, { type, payload }) => {
    switch (type) {

        case CREATETASK_ACTION_CREATE:
            state.Task.push(payload)

        return { ...state, ...payload }

    default:
        return state
    }
}
