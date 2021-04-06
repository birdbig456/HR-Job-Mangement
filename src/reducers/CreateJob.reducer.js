import { CREATEJOB_ACTION_CREATE } from "../constants/Constants";

const JobFamily = [
  {
    
    NameJob: "Human Resource",
    Description : "",
    JobPic:"https://sv1.picz.in.th/images/2021/04/02/Deymw8.jpg",
    Employee:["Bird"]
  },
  {
    NameJob: "Information Technology",
    Description: "",
    JobPic:"https://sv1.picz.in.th/images/2021/04/02/DeFXev.jpg",
    Employee : ["bird","nay"]
  },
  {
    NameJob: "Sale - Marketing",
    Description: "",
    JobPic:"https://sv1.picz.in.th/images/2021/04/02/Debphf.jpg",
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
