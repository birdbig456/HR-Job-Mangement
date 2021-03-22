import { name } from "faker";
import { CREATEATTRIBUTE_ACTION_CREATE } from "../constants/Constants";
import { CREATEATTRIBUTE_ACTION_UPDATE } from "../constants/Constants";


    const Attribute = [{
        name: "Attribute 1",
        value: true,
        id: 1
      },{
        name: "Attribute 2",
        value: true,
        id: 2
      },{
        name: "Attribute 3",
        value: true,
        id: 3
      },{
        name: "Attribute 4",
        value: true,
        id: 4
      },{
        name: "Attribute 5",
        value: true,
        id: 5
      },{
        name: "Attribute 6",
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
