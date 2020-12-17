import { CREATESUBJOB_ACTION_CREATE } from "../constants/Constants";

const SubJob = [
    {
        ParentJobName: "Human Resource",
        NameSubJob: "HRBP",
    },
    {
        ParentJobName: "Human Resource",
        NameSubJob: "HR Service",
    },
    
]

export default (state = {SubJob}, { type, payload }) => {
  switch (type) {
    case CREATESUBJOB_ACTION_CREATE:
      state.SubJob.push(payload);
      return state;

    default:
      return state;
  }
};
