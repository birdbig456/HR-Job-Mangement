import { CREATEDIVISION_ACTION_CREATE } from "../constants/Constants";

const NameDivision = [
    "Create Division"
  ];
  
  export default (state = { NameDivision }, { type, payload }) => {
    switch (type) {
      case CREATEDIVISION_ACTION_CREATE:
        state.NameDivision.push(payload);
        return state;
  
      default:
        return state;
    }
  };
