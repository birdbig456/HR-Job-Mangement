import { CREATECOMPETENCY_ACTION_CREATE } from "../constants/Constants";



export default (state = [], { type, payload }) => {
    switch (type) {

    case CREATECOMPETENCY_ACTION_CREATE:
        state.push(payload);
        return state;

    default:
        return state
    }
}
