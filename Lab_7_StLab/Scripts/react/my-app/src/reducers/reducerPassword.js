import * as constantsAuthorization from "../constants/constantsAuthorization";

const initialState = {
    password: ""
};

export default function reducerPassword(state = initialState) {
    if(action.type === constantsAuthorization.CHANGE_PASSWORD){
        return{
            ...state,
            password: action.password
        }
    }
}