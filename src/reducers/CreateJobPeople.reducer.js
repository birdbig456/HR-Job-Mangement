import { CREATEJOBPEOPLE_ACTION_CREATE } from "../constants/Constants";

const initialState = {
    JobLevel: "18",
    JobClassifield: "12",
    Exp: "28",
    ProjectNeed: " ",
}

export default (state = [initialState], { type, payload }) => {
    switch (type) {

    case CREATEJOBPEOPLE_ACTION_CREATE:
        state.push(payload);
        return state;

    default:
        return state
    }
}
