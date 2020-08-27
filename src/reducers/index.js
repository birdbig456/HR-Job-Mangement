import { combineReducers } from "redux";
import CreateJobReducer from "./CreateJob.reducer";
import CreateSubJobReducer from "./CreateSubJob.reducer";
import CreatePositionReducer from "./CreatePosition.reducer";
import CreateAttributeReducer from "./CreateAttribute.reducer";
export default combineReducers({
    CreateJobReducer,
    CreateSubJobReducer,
    CreatePositionReducer,
    CreateAttributeReducer
});
