import { CREATESUBJOB_ACTION_CREATE } from "../constants/Constants";

const SubJob = [
    {
        ParentJobName: "Job 1",
        NameSubJob: "SubJob 1",
    },
    {
        ParentJobName: "Job 1",
        NameSubJob: "SubJob 2",
    },
    {
        ParentJobName: "Job 1",
        NameSubJob: "SubJob 3",
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
