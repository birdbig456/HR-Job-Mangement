import { CREATEPOSITION_ACTION_CREATE } from "../constants/Constants";

const Position = [
    {
        ParentJobName: "Human Resource",
        ParentSubJob: "HRBP",
        NamePosition:"HRBP Manager"
    },
    {
        ParentJobName: "Human Resource",
        ParentSubJob: "HRBP",
        NamePosition:"HRBP Officer"
    },
    
]

export default (state = {Position}, { type, payload }) => {
    switch (type) {

    case CREATEPOSITION_ACTION_CREATE:
        state.Position.push(payload);
        return state;

    default:
        return state
    }
}
