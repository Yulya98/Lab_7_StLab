import * as constantsAlbum from "../constants/constantsAlbum";

const initialState = {
    activeUserId: ""
};

export default function reducerPassword(state = initialState) {

    if(action.type === constantsAlbum.CHANGE_ACTIVE_USER){
        return{
            ...state,
            activeUserId: action.activeUserId,
        }
    }
}