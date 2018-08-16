import defaultState from "./defaultState"
import * as constants from "../constants/constantsAlbum"

const reducerAlbum=(state=defaultState,action)=>{

    if(action.type === constants.CHANGE_ACTIVE_USER){
        return{
            ...state,
            activeUserId: action.activeUserId
        }
    }

    if(action.type === constants.CHANGE_ACTIVE_USER_FROM_COMMENTS){
        return{
            ...state,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile
        }
    }

    if(action.type === constants.CHANGE_IMAGES){
        return{
            ...state,
            images: [...state.images,action.images],
            nameImg: "",
            path: ""

        }
    }

    if(action.type === constants.CHANGE_DELETE_ITEM){
        return{
            ...state,
            deleteItem: action.deleteItem
        }
    }

    if(action.type === constants.CHANGE_NAME_IMAGE){
        return{
            ...state,
            nameImg: action.nameImg
        }
    }

    if(action.type === constants.CHANGE_PATH){
        return{
            ...state,
            path: action.path
        }
    }

    if(action.type === constants.LOAD_IMAGES){
        return{
            ...state,
            images:[...state.images,action.images]
        }
    }

    if(action.type === constants.RETURN_IN_INITIAL_STATE_IMAGE){
        return{
            ...state,
            images: action.images,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile
        }
    }

    if(action.type === constants.DELETE_PHOTO_FROM_IMAGES){
        return{
            ...state,
            images: action.images,
            deleteItem: ""
        }
    }

    return{
        ...state
    }
};

export default reducerAlbum;