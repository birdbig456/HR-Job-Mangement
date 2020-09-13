import { combineReducers } from "redux";
import CreateJobReducer from "./CreateJob.reducer";
import CreateSubJobReducer from "./CreateSubJob.reducer";
import CreatePositionReducer from "./CreatePosition.reducer";
import CreateAttributeReducer from "./CreateAttribute.reducer";
import CreateJobFitReducer from "./CreateJobFit.reducer";
import CreateJobPeopleReducer from "./CreateJobPeople.reducer";
import CreateCompetencyReducer from "./CreateCompetency.reducer";
export default combineReducers({
    CreateJobReducer,
    CreateSubJobReducer,
    CreatePositionReducer,
    CreateAttributeReducer,
    CreateJobFitReducer,
    CreateJobPeopleReducer,
    CreateCompetencyReducer
});
