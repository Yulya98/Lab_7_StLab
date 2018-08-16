import defaultState from "./defaultState"
import * as constants from "../constants/constantsPosts";

const reducerPosts=(state=defaultState,action) => {
    if(action.type === constants.CHANGE_POSTS){
        return{
            ...state,
            posts: [...state.posts,action.posts]
        }
    }

    if(action.type === constants.CHANGE_SUBPOSTS){
        return {
            ...state,
            subPosts: [...state.subPosts,action.subposts]
        }
    }

    if(action.type === constants.CHANGE_CURRENT_IMAGE){
        return{
            ...state,
            currentImage: action.currentImage
        }
    }

    if(action.type === constants.CHANGE_LIGHTBOXES){
        return{
            ...state,
            lightboxIsOpen: action.lightboxIsOpen
        }
    }

    if(action.type === constants.VISIBLE_POST){
        return{
            ...state,
            isVisiblePost: action.isVisiblePost,
            isVisiblePosts: action.isVisiblePosts,
            idPost: action.idPost
        }
    }

    if(action.type === constants.CHANGE_VISIBLE){
        return{
            ...state,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts,
            isVisiblePosts: action.isVisiblePosts,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile,
            activeUserId: action.activeUserId
        }
    }

    if(action.type === constants.POSTS_VISIBLE){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === constants.CHANGE_IN_INITIAL_STATE_IMAGES){
        return{
            ...state,
            posts: action.posts,
            subPosts:action.subPosts,
            isVisiblePosts:action.isVisiblePosts
        }
    }

    if(action.type === constants.CHANGE_REGISTR_USER){
        return{
            ...state,
            isRegistrationUser: action.isRegistrationUser,
            isVisibleProfile: action.isVisibleProfile
        }
    }

    if(action.type === constants.VISIBLE_AUTHORIZATION){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === constants.CHANGE_INITIAL_STATE_POSTS){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === constants.CHANGE_BIGGER_PHOTO_PATH){
        return{
            ...state,
            srcPhotoBigger: action.srcPhotoBigger,
            isVisibleBiggerPhoto: action.isVisibleBiggerPhoto,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    return{
        ...state
    }
};

export default reducerPosts;