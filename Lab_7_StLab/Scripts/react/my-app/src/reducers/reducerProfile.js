import {defaultState} from "./defaultState"


const reducerProfile=(state=defaultState,action)=>{
    if(action.type === "CHANGE_VISIBLE_ALBUM_FROM_PROFILE"){
        return {
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts:action.isVisiblePosts,
            isVisibleInformation:action.isVisibleInformation,
            flagForCheckAlbumInPosts:action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === "CHANGE_VISIBLE_INFORMATION"){
        debugger;
        return{
            ...state,
            isVisibleInformation: action.isVisibleInformation,
            isVisibleAlbum:action.isVisibleAlbum,
            isVisiblePosts:action.isVisiblePosts,
            flagForCheckAlbumInPosts:action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === "CHANGE_VISIBLE_POSTS_FROM_PROFILE"){
        debugger;
        return{
            ...state,
            isVisibleInformation: action.isVisibleInformation,
            isVisibleAlbum:action.isVisibleAlbum,
            isVisiblePosts:action.isVisiblePosts,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    return{
        ...state
    }
}

export default reducerProfile;