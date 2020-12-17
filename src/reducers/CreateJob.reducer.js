import { CREATEJOB_ACTION_CREATE } from "../constants/Constants";

const JobFamily = [
  {
    
    NameJob: "Human Resource ",
    Description : "",
    Employee:["Bird"]
  },
  {
    NameJob: "Job 2 ",
    Description: "",
    Employee : ["bird","nay"]
  },
  {
    NameJob: "Job 7 ",
    Description: "",
    Employee : ["bird","nay","M","PK","Pro","LL","aa","sss"]
  },
  {
    NameJob: "Job 4 ",
    Description: "",
    Employee : ["bird","nay","M","PK","Pro","LL","aaa0","aaaaaa","sasasa","asqsqw"]
  },
  {
    NameJob: "Job 4 ",
    Description: "",
    Employee : ["bird","nay","M","PK","Pro","LL","aaaaaa","sasasa","asqsqw","bird","nay","M","PK","Pro","LL","aaa0","aaaaaa","sasasa","asqsqw"]
  },
  {
    NameJob: "Job 3 ",
    Description: "",
    Employee : ["bird","nay","M","PK","IT"]
  },
  {
    NameJob: "Job 4 ",
    Description: "",
    Employee : ["bird","nay","M","PK","Pro","LL"]
  },
  {
    NameJob: "Job 5 ",
    Description: "",
    Employee : ["bird","nay","M","Pro"]
  },
  {
    NameJob: "Job 6 ",
    Description: "",
    Employee : ["bird","nay","Pro"]
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
