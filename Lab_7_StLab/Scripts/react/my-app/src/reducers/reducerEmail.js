import * as constantsAuthorization from "../constants/constantsAuthorization";

const initialState = {
    email: ""
};

export default function reducerEmail(state = initialState) {
    if(action.type === constantsAuthorization.CHANGE_EMAIL) {
        return {
            ...state,
            email: action.email
        }
    }
}