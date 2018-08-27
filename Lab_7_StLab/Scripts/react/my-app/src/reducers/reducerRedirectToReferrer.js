import * as constants from "../constants/constants";

let initialState = {
    redirectToReferrer: false
};

export default function reducerRedirectReferrer (state = initialState,action) {

    if(action.type === constants.CHANGE_REDIRECT_TO_REFFER){
        return{
            ...state,
            redirectToReferrer: action.pseoudonym
        }
    }

    return{
        ...state
    }
}