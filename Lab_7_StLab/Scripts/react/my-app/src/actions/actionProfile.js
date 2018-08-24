import * as constantsProfile from "../constants/constantsProfile"

export function changeVisibleAlbom(){
    return (dispatch) => {
        dispatch(visibleAlbum(false))
        dispatch(changePostsVisible(false));
        dispatch(changeVisibleInformationFlag(false));
        dispatch(checkAlbum(false));
        dispatch(checkmMultiAlbum(true));
    }
}

export function visibleAlbum(flag) {
    return{
        type: constantsProfile.CHANGE_VISIBLE_ALBUM_FROM_PROFILE,
        isVisibleAlbum: flag
    }
}

export function changePostsVisible(flag){
    return{
        type: constantsProfile.CHANGE_VISIBLE_POSTS_FROM_PROFILE_FLAG,
        isVisiblePosts: flag
    }
}

export function changeVisibleInformationFlag(flag){
    return{
        type: constantsProfile.CHANGE_VISIBLE_INFORMATION_FROM_PROFILE,
        isVisibleInformation: flag
    }
}

export function checkAlbum(flag){
    return{
        type: constantsProfile.CHANGE_VISIBLE_CHECK_ALBUM_FROM_PROFILE,
        flagForCheckAlbumInPosts: flag
    }
}

export function checkmMultiAlbum(flag){
    return{
        type: constantsProfile.CHANGE_VISIBLE_CHECK_MULTI_ALBUM_FROM_PROFILE,
        flagForCheckAlbumInPosts: flag
    }
}

export function changeVisibleInformation(){
    return (dispatch) => {
        dispatch(visibleAlbum(false));
        dispatch(changePostsVisible(false));
        dispatch(changeVisibleInformationFlag(true));
        dispatch(checkAlbum(false));
        dispatch(checkmMultiAlbum(false));
    }
}


export function changeVisiblePosts(){
    return (dispatch) => {
        dispatch(visibleAlbum(false));
        dispatch(changePostsVisible(true));
        dispatch(changeVisibleInformationFlag(false));
        dispatch(checkAlbum(false));
        dispatch(checkmMultiAlbum(false));
    }
}