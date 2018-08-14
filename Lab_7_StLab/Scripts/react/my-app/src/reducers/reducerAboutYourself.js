import {defaultState} from "./defaultState"

const aboutYorself=(state=defaultState,action)=>{

    if(action.type === "INFO_ABOUT_USER"){
        return{
            ...state,
            name:action.name,
            surname:action.surname,
            emailUser: action.emailUser,
            sphere: action.sphere,
            city: action.city,
        }
    }

    return{
        ...state
    }
};

export default aboutYorself;