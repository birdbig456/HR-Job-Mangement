import { CREATEDIVISION_ACTION_CREATE } from "../constants/Constants";

const NameDivision = [
    "Create Division"
  ];
  
  export default (state = { NameDivision }, { type, payload }) => {
    switch (type) {
      case CREATEDIVISION_ACTION_CREATE:
        state.NameDivision.splice(0,1,payload);
        return state;
  
      default:
        return state;
    }
  };
