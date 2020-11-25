import { CREATEPOSITION_ACTION_CREATE } from "../constants/Constants";

const Position = [
    {
        ParentJobName: "Job 1",
        ParentSubJob: "SubJob 1",
        NamePosition:"Position 1"
    },
    {
        ParentJobName: "Job 1",
        ParentSubJob: "SubJob 1",
        NamePosition:"Position 2"
    },
    {
        ParentJobName: "Job 1",
        ParentSubJob: "SubJob 1",
        NamePosition:"Position 3"
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
