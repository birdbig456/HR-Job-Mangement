import { CREATEJOB_ACTION_CREATE } from "../constants/Constants";

const JobFamily = [
  {
    
    NameJob: "Human Resource",
    Description : "",
    Employee:["Bird"]
  },
  {
    NameJob: "Information Technology",
    Description: "",
    Employee : ["bird","nay"]
  },
  {
    NameJob: "Sell Marketing",
    Description: "",
    Employee : ["bird","nay","M","PK","Pro","LL","aa","sss"]
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
