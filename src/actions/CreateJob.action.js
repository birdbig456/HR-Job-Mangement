import { CREATEJOB_ACTION_CREATE } from "../constants/Constants";
import { CREATESUBJOB_ACTION_CREATE } from "../constants/Constants";
import { CREATEPOSITION_ACTION_CREATE } from "../constants/Constants";
import { CREATEATTRIBUTE_ACTION_CREATE } from "../constants/Constants";
import { CREATEJOBPEOPLE_ACTION_CREATE } from "../constants/Constants";
import { CREATECOMPETENCY_ACTION_CREATE } from "../constants/Constants";
import { CREATEJOBFIT_ACTION_CREATE } from "../constants/Constants";
import { CREATETEAM_ACTION_CREATE } from "../constants/Constants";
import { CREATEDIVISION_ACTION_CREATE } from "../constants/Constants";
import { CREATELEVEL_ACTION_CREATE } from "../constants/Constants";
import { CREATECLASS_ACTION_CREATE } from "../constants/Constants";
import { CREATEWORKFORCE_ACTION_CREATE } from "../constants/Constants";
import { CREATEATTRIBUTE_ACTION_UPDATE } from "../constants/Constants";
import { CREATEPROJECT_ACTION_CREATE } from "../constants/Constants";
import { CREATETASK_ACTION_CREATE } from "../constants/Constants";



export const setStateToCreateJob = (payload) => ({
    type: CREATEJOB_ACTION_CREATE,
    payload
})
export const setStateToCreateSubJob = (payload) => ({
    type: CREATESUBJOB_ACTION_CREATE,
    payload
})
export const setStateToCreatePosition = (payload) => ({
    type: CREATEPOSITION_ACTION_CREATE,
    payload
})
export const setStateToCreateAttribute = (payload) => ({
    type: CREATEATTRIBUTE_ACTION_CREATE,
    payload
})
export const setStateToCreateJobPeople = (payload) => ({
    type: CREATEJOBPEOPLE_ACTION_CREATE,
    payload
})
export const setStateToCreateCompetency = (payload) => ({
    type: CREATECOMPETENCY_ACTION_CREATE,
    payload
})
export const setStateToCreateJobFit = (payload) => ({
    type: CREATEJOBFIT_ACTION_CREATE,
    payload
})
export const setStateToCreateTeam = (payload) => ({
    type: CREATETEAM_ACTION_CREATE,
    payload
})
export const setStateToCreateDivision = (payload) => ({
    type: CREATEDIVISION_ACTION_CREATE,
    payload
})
export const setStateToCreateLevel = (payload) => ({
    type: CREATELEVEL_ACTION_CREATE,
    payload
})
export const setStateToCreateClass = (payload) => ({
    type: CREATECLASS_ACTION_CREATE,
    payload
})
export const setStateToCreateWorkforce = (payload) => ({
    type: CREATEWORKFORCE_ACTION_CREATE,
    payload
})
export const setStateToUpdateAttribute = (payload) => ({
    type: CREATEATTRIBUTE_ACTION_UPDATE,
    payload
})

export const setStateToCreateProject = (payload) => ({
    type: CREATEPROJECT_ACTION_CREATE,
    payload
})

export const setStateToCreateTask = (payload) => ({
    type: CREATETASK_ACTION_CREATE,
    payload
})

//----------------------------------------------------------------
export const CreateJob = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateJob(payload))
    }
}
export const CreateSubJob = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateSubJob(payload))
    }
}
export const CreatePosition = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreatePosition(payload))
    }
}
export const CreateAttribute = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateAttribute(payload))
    }
}
export const CreateJobPeople = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateJobPeople(payload))
    }
}
export const CreateCompetency = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateCompetency(payload))
    }
}
export const CreateJobFit = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateJobFit(payload))
    }
}
export const CreateTeam = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateTeam(payload))
    }
}
export const CreateDivision= (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateDivision(payload))
    }
}
export const CreateLevel= (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateLevel(payload))
    }
}
export const CreateClass = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateClass(payload))
    }
}
export const CreateWorkforce = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateWorkforce(payload))
    }
}
export const UpdateAttribute = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToUpdateAttribute(payload))
    }
}
export const CreateProject = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateProject(payload))
    }
}

//--------------------------------------------------------


export const CreateTask = (payload) => {
    return dispatch => {
        console.log(payload)
        dispatch(setStateToCreateTask(payload))
    }
}
//--------------------------------------------------------

