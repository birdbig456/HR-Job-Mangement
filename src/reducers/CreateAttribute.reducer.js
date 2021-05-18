import { name } from "faker";
import { CREATEATTRIBUTE_ACTION_CREATE } from "../constants/Constants";
import { CREATEATTRIBUTE_ACTION_UPDATE } from "../constants/Constants";


    const Attribute = [{
        name: "Communication",
        value: true,
        id: 1
      },{
        name: "Organizational",
        value: true,
        id: 2
      },{
        name: "Decision-making",
        value: true,
        id: 3
      },{
        name: "Problem solving",
        value: true,
        id: 4
      },{
        name: "Teamworking",
        value: true,
        id: 5
      },{
        name: "Work under pressure",
        value: false,
        id: 6
      }];

export default (state = Attribute, { type, payload }) => {
    switch (type) {

    case CREATEATTRIBUTE_ACTION_CREATE:
        state[0].Attribute.push(payload.NameAttribute)
        return state
    case CREATEATTRIBUTE_ACTION_UPDATE:
        console.log(({ ...Attribute }))
        var oldValue = Attribute.filter(Attribute => Attribute.id != 2)
        var newValue = Attribute.filter(Attribute => Attribute.id == 2)[0]
        newValue.value = !newValue.value
        var outputValue = [...oldValue, newValue].sort(((a,b) => a.id - b.id))
    default:
        return state
    }
}
