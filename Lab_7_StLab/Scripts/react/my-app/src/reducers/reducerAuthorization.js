import defaultState from "./defaultState"
import * as constants from "../constants/constantsAuthorization"

const reducerAuthorization=(state=defaultState,action)=>{

    if(action.type === constants.CHANGE_EMAIL){
        return {
            ...state,
            email: action.email
        }
    }

    if(action.type === constants.CHANGE_PASSWORD){
        return{
            ...state,
            password: action.password
        }
    }

    if(action.type === constants.CHANGE_VISIBLE_PROFILE){
        return{
            ...state,
            isVisibleProfile: action.isVisibleProfile,
            isVisibleAuthorization: action.isVisibleAuthorization,
            activeUserId: action.activeUserId,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile,
            isRegistrationUser: action.isRegistrationUser
        }
    }

    if(action.type === constants.CHANGE_VISIBLE_REGISTRATION){
        return{
            ...state,
            isVisibleRegistration: action.isVisibleRegistration,
            isVisibleAuthorization: action.isVisibleAuthorization
        }
    }

    return{
        ...state
    }
}

export default reducerAuthorization;