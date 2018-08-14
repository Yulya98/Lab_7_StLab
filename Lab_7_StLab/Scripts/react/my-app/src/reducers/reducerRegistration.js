import {defaultState} from "./defaultState"

const reducerRegistration=(state=defaultState,action)=>{
    if(action.type === "CHANGE_NAME_REGISTRATION"){
        return{
            ...state,
            name:action.name
        }
    }

    if(action.type === "CHANGE__SURNAME_REGISTRATION"){
        return{
            ...state,
            surname: action.surname
        }
    }

    if(action.type === "CHANGE__PSEOUDONYM_REGISTRATION"){
        return{
            ...state,
            pseoudonym: action.pseoudonym
        }
    }

    if(action.type === "CHANGE__EMAIL_REGISTRATION"){
        return{
            ...state,
            registrationEmail: action.registrationEmail
        }
    }

    if(action.type === "CHANGE__SPHERE_REGISTRATION"){
        return{
            ...state,
            sphere: action.sphere
        }
    }

    if(action.type === "CHANGE__CITY_REGISTRATION"){
        return{
            ...state,
            city: action.city
        }
    }

    if(action.type === "CHANGE__PASSWORD_REGISTRATION"){
        return{
            ...state,
            registrationPassword: action.registrationPassword
        }
    }

    if(action.type === "CHANGE_VISIBLE_PROFILE_FROM_AUTHORIZATION"){
        return{
            ...state,
            isVisibleProfile: action.isVisibleProfile,
            isVisibleRegistration: action.isVisibleRegistration,
            isRegistrationUser:action.isRegistrationUser
        }
    }

    return{
        ...state
    }
};

export default reducerRegistration;