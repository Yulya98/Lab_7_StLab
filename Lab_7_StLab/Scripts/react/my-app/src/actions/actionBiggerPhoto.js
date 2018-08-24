import * as constants from "../constants/constantsBiggerPhoto"

export function changeVisibleBiggerPhoto(){
    return (dispatch) =>{
        dispatch(VisibleBiggerPhoto());
        dispatch(visibleBiggerPhotoPosts())
    }
}

export function VisibleBiggerPhoto(){
    return{
        type: constants.CHANGE_VISIBLE_BIGGER_PHOTO,
        isVisibleBiggerPhoto: false
    }
}

export function visibleBiggerPhotoPosts() {
    return{
        type: constants.CHANGE_VISIBLE_BIGGER_PHOTO_POSTS,
        isVisiblePosts: true
    }
}