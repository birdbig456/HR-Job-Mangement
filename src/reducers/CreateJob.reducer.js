import { CREATEJOB_ACTION_CREATE } from "../constants/Constants";

const JobFamily = [
  {
    
    NameJob: "Job 1 ",
    Description : "",
    Employee:["Bird"]
  },
  {
    NameJob: "Job 2 ",
    Description: "",
    Employee : ["bird","nay"]
  },
  {
    NameJob: "Job 3 ",
    Description: "",
    Employee : ["bird","nay","Pro"]
  },
  {
    NameJob: "Job 4 ",
    Description: "",
    Employee : ["bird","nay","M","Pro"]
  },
  {
    NameJob: "Job 5 ",
    Description: "",
    Employee : ["bird","nay","M","PK","Pro"]
  },
  {
    NameJob: "Job 6 ",
    Description: "",
    Employee : ["bird","nay","M","PK","IT"]
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
