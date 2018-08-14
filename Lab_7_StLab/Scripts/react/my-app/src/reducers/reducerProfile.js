import defaultState from "./defaultState"
import * as constants from "../constants/constantsProfile";


const reducerProfile=(state=defaultState,action)=>{
    if(action.type === constants.CHANGE_VISIBLE_ALBUM_FROM_PROFILE){
        return {
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts,
            isVisibleInformation: action.isVisibleInformation,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === constants.CHANGE_VISIBLE_INFORMATION){
        return{
            ...state,
            isVisibleInformation: action.isVisibleInformation,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === constants.CHANGE_VISIBLE_POSTS_FROM_PROFILE){
        return{
            ...state,
            isVisibleInformation: action.isVisibleInformation,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    return{
        ...state
    }
}

export default reducerProfile;