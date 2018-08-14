import defaultState from "./defaultState";
import * as constants from "../constants/constantsBiggerPhoto";

const reducerBiggerPhoto=(state=defaultState,action) => {

    if(action.type === constants.CHANGE_VISIBLE_BIGGER_PHOTO){
        return{
            ...state,
            isVisibleBiggerPhoto: action.isVisibleBiggerPhoto,
            isVisiblePosts: action.isVisiblePosts
        }
    }
}