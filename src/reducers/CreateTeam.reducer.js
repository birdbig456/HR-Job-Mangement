import { CREATETEAM_ACTION_CREATE } from "../constants/Constants";
const Team = [
    
]

export default (state = {Team}, { type, payload }) => {
    switch (type) {

    case CREATETEAM_ACTION_CREATE:
        state.Team.push(payload)
        
        return { ...state, ...payload}

    default:
        return state
    }
}
