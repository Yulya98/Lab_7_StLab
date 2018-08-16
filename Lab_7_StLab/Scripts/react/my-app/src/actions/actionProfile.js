import * as constantsProfile from "../constants/constantsProfile"

export function changeVisibleAlbom(){
    return (dispatch) => {
        dispatch(visibleAlbum())
    }
}

export function visibleAlbum() {
    return{
        type: constantsProfile.CHANGE_VISIBLE_ALBUM_FROM_PROFILE,
        isVisibleAlbum: false,
        isVisiblePosts: false,
        isVisibleInformation: false,
        flagForCheckAlbumInPosts: false,
        isVisibleMultiAlbums: true
    }
}

export function changeVisibleInformation(){
    return (dispatch) => {
        dispatch(visibleInformation())
    }
}

export function visibleInformation() {
    return{
        type: constantsProfile.CHANGE_VISIBLE_INFORMATION,
        isVisibleInformation: true,
        isVisibleAlbum: false,
        isVisiblePosts: false,
        flagForCheckAlbumInPosts: false,
        isVisibleMultiAlbums:false
    }
}


export function changeVisiblePosts(){
    return (dispatch) => {
        dispatch(visiblePosts())
    }
}

export function visiblePosts() {
    return{
        type:constantsProfile.CHANGE_VISIBLE_POSTS_FROM_PROFILE,
        isVisibleAlbum: false,
        isVisiblePosts: true,
        isVisibleInformation: false,
        flagForCheckAlbumInPosts: false,
        isVisibleMultiAlbums: false
    }
}