import { combineReducers } from "redux";
import CreateJobReducer from "./CreateJob.reducer";
import CreateSubJobReducer from "./CreateSubJob.reducer";
import CreatePositionReducer from "./CreatePosition.reducer";
import CreateAttributeReducer from "./CreateAttribute.reducer";
import CreateJobFitReducer from "./CreateJobFit.reducer";
import CreateJobPeopleReducer from "./CreateJobPeople.reducer";
import CreateCompetencyReducer from "./CreateCompetency.reducer";
import CreateTeamReducer from "./CreateTeam.reducer";
import CreateDivisionReducer from "./CreateDivision.reducer";
import CreateLevelReducer from "./CreateLevel.reducer";
import CreateclassReducer from "./CreateClass.reducer";
import CreateProjectReducer from "./CreateProject.reducer";
import CreateTaskReducer from "./CreateTask.reducer";

export default combineReducers({
    CreateJobReducer,
    CreateSubJobReducer,
    CreatePositionReducer,
    CreateAttributeReducer,
    CreateJobFitReducer,
    CreateJobPeopleReducer,
    CreateCompetencyReducer,
    CreateTeamReducer,
    CreateDivisionReducer,
    CreateLevelReducer,
    CreateclassReducer,
    CreateProjectReducer,
    CreateTaskReducer
});
