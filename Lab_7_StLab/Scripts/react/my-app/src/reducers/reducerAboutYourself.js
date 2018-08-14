import defaultState from "./defaultState"
import * as constants from "../constants/constantsAboutYoiurself"

const aboutYorself=(state=defaultState,action)=>{

    if(action.type === constants.INFO_ABOUT_USER){
        return{
            ...state,
            name: action.name,
            surname: action.surname,
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