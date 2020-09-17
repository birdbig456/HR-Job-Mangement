import { CREATEJOB_ACTION_CREATE } from "../constants/Constants";

const JobFamily = [
  {
    NameJob: "Job 1 ",
    Description: "",
  },
  {
    NameJob: "Job 2 ",
    Description: "",
  },
  {
    NameJob: "Job 3 ",
    Description: "",
  },
  {
    NameJob: "Job 4 ",
    Description: "",
  },
];

export default (state = { JobFamily }, { type, payload }) => {
  switch (type) {
    case CREATEJOB_ACTION_CREATE:
      state.JobFamily.push(payload);
      return state;

    default:
      return state;
  }
};
