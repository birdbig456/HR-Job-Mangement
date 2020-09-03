import { CREATEATTRIBUTE_ACTION_CREATE } from "../constants/Constants";



    const initialState = {
                            Attribute :[
                                "Attribute 1",
                                "Attribute 2",
                                "Attribute 3",
                                "Attribute 4",
                                "Attribute 5",
                                "Attribute 6",
                                "Attribute 7",
                                "Attribute 8",
                                "Attribute 9",
                                "Attribute 10",
                                "Attribute 11",
                                "Attribute 12",
                            ],
                            
                            
}

export default (state = [initialState], { type, payload }) => {
    switch (type) {

    case CREATEATTRIBUTE_ACTION_CREATE:
        state[0].Attribute.push(payload.NameAttribute)
        return state

    default:
        return state
    }
}

