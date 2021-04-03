import { CREATESUBJOB_ACTION_CREATE } from "../constants/Constants";

const SubJob = [
    {
        ParentJobName: "Human Resource",
        NameSubJob: "HRBP",
        SubJobPic:"https://sv1.picz.in.th/images/2021/04/03/Dykru2.jpg",
    },
    {
        ParentJobName: "Human Resource",
        NameSubJob: "HR Service",
        SubJobPic:"https://sv1.picz.in.th/images/2021/04/03/Dy3tkV.jpg",
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
