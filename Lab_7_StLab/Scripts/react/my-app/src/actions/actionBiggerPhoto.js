import * as constants from "../constants/constantsBiggerPhoto"

export function changeVisibleBiggerPhoto(){
    return (dispatch) =>{
        dispatch(VisibleBiggerPhoto());
    }
}

export function VisibleBiggerPhoto(){
    return{
        type: constants.CHANGE_VISIBLE_BIGGER_PHOTO,
        isVisibleBiggerPhoto: false,
        isVisiblePosts: true
    }
}